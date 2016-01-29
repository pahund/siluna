/**
 * entities.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import {
    ANIMATE,
    TINT,
    ROTATE_TO_POINT,
    ROTATE_TO_VECTOR,
    MOVE_TO_POINT
} from "../actions";

import animator from "../systems/animator";
import moverToPoint from "../systems/moverToPoint";
import rotaterToPoint from "../systems/rotaterToPoint";
import rotaterToVector from "../systems/rotaterToVector";
import tinter from "../systems/tinter";

function getEntity(state, action) {
    return state.get(action.entity);
}

export default (state = {}, action = null) => {
    switch (action.type) {
        case MOVE_TO_POINT:
            return state.update(moverToPoint(getEntity(state, action), action.target, action.speed, action.easing, action.callback));
        case ROTATE_TO_POINT:
            return state.update(rotaterToPoint(getEntity(state, action), action.target, action.speed, action.callback));
        case ROTATE_TO_VECTOR:
            return state.update(rotaterToVector(getEntity(state, action), action.target, action.speed, action.callback));
        case TINT:
            return state.update(tinter(getEntity(state, action), action.callback));
        case ANIMATE:
            return state.update(animator(getEntity(state, action), action.animation, action.callback));
    }
    return state;
};
