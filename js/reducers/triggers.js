/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import {
    TAP_ON_SCREEN,
    getByType,
    CURRENT_TAP,
    CLEAR_DISPATCHES,
    CLEAR_OBSOLETE_SEQUENCES,
    RESUME_SEQUENCE
} from "../actions";
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

function collectSequence(iterator, currentTap, sequenceId) {
    const next = iterator.next();
    if (next.done) {
        return [[], {}]; // empty sequence
    }
    let [ dispatches, pending ] = collect(next.value, currentTap);
    const dispatchesWithDuration = dispatches.filter(dispatch => dispatch.hasDuration);
    if (dispatchesWithDuration.length > 0) {
        if (sequenceId === undefined) {
            sequenceId = generateId();
        }
        dispatchesWithDuration.forEach(dispatch => {
            dispatch.sequenceIds = dispatch.sequenceIds ? dispatch.sequenceIds.push(sequenceId) : [ sequenceId ]
        });
        pending[sequenceId] = deepFreeze({
            waitingFor: dispatchesWithDuration.length,
            iterator,
            currentTap
        });
        console.log(`[PH_LOG] new pending created for sequence ${sequenceId}: `, pending[sequenceId]); // PH_TODO: REMOVE
    } else {
        let [ d, p ] = collectSequence(iterator, currentTap, sequenceId);
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
        sequenceIds = state.sequenceIds || [],
        obsoleteSequenceIds = state.obsoleteSequenceIds || [];
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
        case CLEAR_OBSOLETE_SEQUENCES:
            let nextP = { ...pending };
            if (obsoleteSequenceIds.length > 0) {
                console.log(`[PH_LOG] clear obsolete sequences`, obsoleteSequenceIds); // PH_TODO: REMOVE
            }
            obsoleteSequenceIds.forEach(obsid => {
                if (nextP[obsid]) {
                    console.log(`[PH_LOG] deleting pending item for ${obsid} because it is obsolete`); // PH_TODO: REMOVE
                    delete nextP[obsid];
                }
            });
            pending = nextP;
            obsoleteSequenceIds = [];
            break;
        case RESUME_SEQUENCE:
            let nextPending = { ...pending },
                nextSequenceIds = [];
            action.sequenceIds.forEach(sequenceId => {
                const prevPendingItem = pending[sequenceId];
                if (!prevPendingItem) {
                    console.warn(`[PH_LOG] no pending item for sequence ID ${sequenceId} found`); // PH_TODO: REMOVE
                    nextSequenceIds.push(sequenceId);
                    return;
                }
                if (prevPendingItem.waitingFor === 1) {
                    console.log(`[PH_LOG] pending item for sequence ID ${sequenceId} resolved`); // PH_TODO: REMOVE
                    let [ d, p ] = collectSequence(prevPendingItem.iterator, prevPendingItem.currentTap, sequenceId);
                    dispatches = [
                        ...dispatches,
                        ...d
                    ];
                    if (Object.keys(p).length > 0) {
                        nextPending = Object.assign(nextPending, p);
                    } else {
                        console.log(`[PH_LOG] deleting pending for sequence ID ${sequenceId}`);
                        delete nextPending[sequenceId];
                    }
                } else {
                    let nextPendingItem = {
                        ...prevPendingItem,
                        waitingFor: prevPendingItem.waitingFor - 1
                    };
                    console.log(`[PH_LOG] pending item for sequence ID ${sequenceId} not yet resolved, waiting for ${nextPendingItem.waitingFor} more resolution trigger`); // PH_TODO: REMOVE

                    nextPending[sequenceId] = nextPendingItem;
                }
                console.log(`[PH_LOG] we now have ${Object.keys(nextPending).length} pending items`, nextPending); // PH_TODO: REMOVE
            });
            sequenceIds = nextSequenceIds;
            pending = nextPending;
            break;
    }
    return {
        ...state,
        dispatches,
        pending,
        sequenceIds,
        obsoleteSequenceIds
    };
};
