/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import { UPDATE, INIT, getTriggerActions } from "../actions";
import { combineReducers } from "redux";
import entities from "./entities";
import triggers from "./triggers";
import updater from "../systems/updater";
import Entities from "../entities/Entities";
import Action from "../actions/util/Action";
import Group from "../actions/util/Group";
import Sequence from "../actions/util/Sequence";

const reducers = combineReducers({
    triggers,
    entities
});
function walkTrigger(current, dispatch) {
    let next;
    if (current instanceof Group || current instanceof Sequence) {
        if (current instanceof Group) {
            next = new Group();
        } else {
            next = new Sequence();
        }
        for (const member of current) {
            next.add(walkTrigger(member, dispatch));
        }
    }
    if (current instanceof Action) {
        next = new Action(current.type, ...current.args);
        next.dispatch = dispatch;
    }
    return next;
}

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE:
            const entities = new Entities();
            for (const [ entity ] of state.entities) {
                entities.set(updater(state.entities.get(entity), action.timeDelta));
            }
            return {
                ...state,
                entities
            };
        case INIT:
            const triggers = {};
            for (const triggerAction of getTriggerActions()) {
                const trigger = state.triggers[triggerAction];
                if (!trigger) {
                    continue;
                }
                triggers[triggerAction] = walkTrigger(trigger, action.dispatch);
            }
            return {
                ...state,
                triggers
            };
        default:
            return reducers(state, action);
    }
};

