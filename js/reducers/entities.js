/**
 * entities.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import {
    ANIMATE,
    UPDATE,
    TINT,
    ROTATE_TO_POINT,
    ROTATE_TO_VECTOR,
    MOVE_TO_POINT
} from "../actions";

import updater from "../systems/updater";
import animator from "../systems/animator";
import tinter from "../systems/tinter";
import rotaterToPoint from "../systems/rotaterToPoint";
import rotaterToVector from "../systems/rotaterToVector";
import moverToPoint from "../systems/moverToPoint";

function getEntity(state, action) {
    return state[action.entity];
}

export default (state = {}, action = null) => {
    switch (action.type) {
        case MOVE_TO_POINT:
            return {
                ...state,
                [action.entity]: moverToPoint(getEntity(state, action), action.target, action.speed, action.easing, action.callback)
            };
        case ROTATE_TO_POINT:
            return {
                ...state,
                [action.entity]: rotaterToPoint(getEntity(state, action), action.target, action.speed, action.callback)
            };
        case ROTATE_TO_VECTOR:
            return {
                ...state,
                [action.entity]: rotaterToVector(getEntity(state, action), action.target, action.speed, action.callback)
            };
        case TINT:
            return {
                ...state,
                [action.entity]: tinter(getEntity(state, action), action.callback)
            };
        case ANIMATE:
            return {
                ...state,
                [action.entity]: animator(getEntity(state, action), action.animation, action.callback)
            };
    }
    return state;
};
