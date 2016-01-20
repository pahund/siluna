/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import { UPDATE } from "../actions";
import { combineReducers } from "redux";
import entities from "./entities";
import triggers from "./triggers";
import updater from "../systems/updater";

const reducers = combineReducers({
    triggers,
    entities
});

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE:
            const entities = {};
            let sequenceIds = state.triggers.sequenceIds || [],
                obsoleteSequenceIds = state.triggers.obsoleteSequenceIds || [];
            Object.keys(state.entities).forEach(entity => {
                let sids,
                    obsids;
                [ entities[entity], sids, obsids ] = updater(state.entities[entity], action.timeDelta);
                if (sids) {
                    sequenceIds = sequenceIds.concat(sids);
                }
                if (obsids) {
                    obsoleteSequenceIds = obsoleteSequenceIds.concat(obsids)
                }
            });
            return {
                ...state,
                triggers: {
                    ...state.triggers,
                    sequenceIds,
                    obsoleteSequenceIds
                },
                entities
            };
        default:
            return reducers(state, action);
    }
};

