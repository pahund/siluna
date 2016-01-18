/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { TAP_ON_SCREEN, getByType, CURRENT_TAP, CLEAR_DISPATCHES, RESUME_SEQUENCE } from "../actions";
import Action from "../actions/Action";
import Group from "../actions/Group";
import Sequence from "../actions/Sequence";
import generateId from "../util/generateId";
import deepFreeze from "deep-freeze";

function collect(node, currentTap) {
    if (node instanceof Action) {
        return [[ node.toDispatchable({ currentTap }) ], {}];
    }
    if (node instanceof Group) {
        let dispatches = [],
            pending = {};
        for (let child of node) {
            let [ d, p ] = collect(child, currentTap);
            dispatches = dispatches.concat(d);
            pending = Object.assign(pending, p);
        }
        return [ dispatches, pending ];
    }
    if (node instanceof Sequence) {
        return collectSequence(node.iterator, currentTap);
    }

    throw new TypeError("Trigger components need to be actions, groups or sequences, I got this:", node);
}

function collectSequence(iterator, currentTap) {
    const next = iterator.next();
    if (next.done) {
        return [[], {}]; // empty sequence
    }
    let [ dispatches, pending ] = collect(next.value, currentTap);
    const dispatchesWithDuration = dispatches.filter(dispatch => dispatch.hasDuration);
    if (dispatchesWithDuration.length > 0) {
        const sequenceId = generateId();
        dispatchesWithDuration.forEach(dispatch => {
            dispatch.sequenceIds = dispatch.sequenceIds ? dispatch.sequenceIds.push(sequenceId) : [ sequenceId ]
        });
        pending[sequenceId] = deepFreeze({
            waitingFor: dispatchesWithDuration.length,
            iterator,
            currentTap
        });
    } else {
        let [ d, p ] = collectSequence(iterator, currentTap);
        dispatches = [
            ...dispatches,
            ...d
        ];
        pending = Object.assign(pending, p);
    }
    return [ dispatches, pending ];
}

export default (state = {}, action = null) => {
    let dispatches = state.dispatches || [],
        pending = state.pending || {},
        sequenceIds = state.sequenceIds || [];
    switch (action.type) {
        case TAP_ON_SCREEN:
            let [ d, p ] = collect(state.tapOnScreen, action.target);
            dispatches = [
                ...dispatches,
                ...d
            ];
            pending = Object.assign(pending, p);
            break;
        case CLEAR_DISPATCHES:
            dispatches = [];
            break;
        case RESUME_SEQUENCE:
            let nextPending = {};
            action.sequenceIds.forEach(sequenceId => {
                const prevPendingItem = pending[sequenceId];
                if (!prevPendingItem) {
                    return;
                }
                if (prevPendingItem.waitingFor === 1) {
                    let [ d, p ] = collectSequence(prevPendingItem.iterator, prevPendingItem.currentTap);
                    dispatches = [
                        ...dispatches,
                        ...d
                    ];
                    nextPending = Object.assign(nextPending, p);
                } else {
                    let nextPendingItem = {
                        ...prevPendingItem,
                        waitingFor: prevPendingItem.waitingFor - 1
                    };
                    nextPending[sequenceId] = nextPendingItem;
                }
            });
            sequenceIds = [];
            pending = nextPending;
            break;
    }
    return {
        ...state,
        dispatches,
        pending,
        sequenceIds
    };
};
