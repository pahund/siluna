/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { TAP_ON_SCREEN, getByType, CURRENT_TAP, CLEAR_DISPATCHES } from "../actions";
import Action from "../actions/Action";
import Group from "../actions/Group";
import Sequence from "../actions/Sequence";
import generateId from "../util/generateId";

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
        const iterator = node.iterator,
            first = iterator.next();
        if (first.done) {
            return [[], {}]; // empty sequence
        }
        let [ dispatches, pending ] = collect(first.value, currentTap);
        const dispatchesWithDuration = dispatches.filter(dispatch => dispatch.hasDuration);
        if (dispatchesWithDuration.length > 0) {
            const sequenceId = generateId();
            dispatchesWithDuration.forEach(dispatch => {
                dispatch.sequenceIds = dispatch.sequenceIds ? dispatch.sequenceIds.push(sequenceId) : [ sequenceId ]
            });
            pending[sequenceId] = {
                waitingFor: dispatchesWithDuration.length,
                iterator
            };
        }
        return [ dispatches, pending ];
    }

    throw new TypeError("Trigger components need to be actions, groups or sequences, I got this:", node);
}

export default (state = {}, action = null) => {
    let dispatches = state.dispatches || [],
        pending = state.pending || {};
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
    }
    return {
        ...state,
        dispatches,
        pending
    };
};
