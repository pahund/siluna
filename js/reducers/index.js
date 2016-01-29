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
            const entities = new Map();
            for (const [ entity ] of state.entities) {
                entities.set(entity, updater(state.entities.get(entity), action.timeDelta));
            }
            return {
                ...state,
                entities
            };
        default:
            return reducers(state, action);
    }
};

