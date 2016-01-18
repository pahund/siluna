/**
 * entities.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import { ANIMATE, UPDATE, TINT, MOVE_TO_TAP, ROTATE_TO_TAP, ROTATE_TO_POINT, MOVE_TO_POINT } from "../actions";

import updater from "../systems/updater";
import animator from "../systems/animator";
import tinter from "../systems/tinter";
import rotaterToPoint from "../systems/rotaterToPoint";
import moverToPoint from "../systems/moverToPoint";

function getEntity(state, action) {
    return state[action.entity];
}

export default (state = {}, action = null) => {
    switch (action.type) {
        case MOVE_TO_POINT:
            return {
                ...state,
                [action.entity]: moverToPoint(getEntity(state, action), action.target, action.speed, action.easing, action.sequenceIds)
            };
        case ROTATE_TO_POINT:
            return {
                ...state,
                [action.entity]: rotaterToPoint(getEntity(state, action), action.target, action.speed, action.sequenceIds)
            };
        case TINT:
            return {
                ...state,
                [action.entity]: tinter(getEntity(state, action))
            };
        case ANIMATE:
            return {
                ...state,
                [action.entity]: animator(getEntity(state, action), action.animation)
            };
    }
    return state;
};
