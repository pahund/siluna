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
    entities,
    sequenceIds: (state = [], action) => state
});

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE:
            const entities = {};
            let sequenceIds = state.sequenceIds || [];
            Object.keys(state.entities).forEach(entity => {
                let sids;
                [ entities[entity], sids ] = updater(state.entities[entity], action.timeDelta);
                if (sids) {
                    sequenceIds = sequenceIds.concat(sids);
                }
            });
            return {
                ...state,
                entities,
                sequenceIds
            };
        default:
            return reducers(state, action);
    }
};

