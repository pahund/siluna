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
    MOVE_TO_POINT,
    START_MOVING_TO_POINT,
    STOP_MOVING_TO_POINT,
    CHANGE_DIRECTION
} from "../actions";

import animator from "../systems/animator";
import moverToPoint from "../systems/moverToPoint";
import moveToPointStarter from "../systems/moveToPointStarter";
import moveToPointStopper from "../systems/moveToPointStopper"
import rotaterToPoint from "../systems/rotaterToPoint";
import rotaterToVector from "../systems/rotaterToVector";
import tinter from "../systems/tinter";
import directionChanger from "../systems/directionChanger";

function getEntity(state, action) {
    return state.get(action.entity);
}

export default (state = {}, action = null) => {
    switch (action.type) {
        case MOVE_TO_POINT:
            return state.update(moverToPoint(getEntity(state, action), action.target, action.speed, action.easing, action.callback));
        case START_MOVING_TO_POINT:
            return state.update(moveToPointStarter(getEntity(state, action), action.target, action.targetSpeed, action.lerpSpeed, action.callback));
        case STOP_MOVING_TO_POINT:
            return state.update(moveToPointStopper(getEntity(state, action), action.callback));
        case ROTATE_TO_POINT:
            return state.update(rotaterToPoint(getEntity(state, action), action.target, action.speed, action.callback));
        case ROTATE_TO_VECTOR:
            return state.update(rotaterToVector(getEntity(state, action), action.target, action.speed, action.callback));
        case TINT:
            return state.update(tinter(getEntity(state, action), action.callback));
        case ANIMATE:
            return state.update(animator(getEntity(state, action), action.animation, action.callback));
        case CHANGE_DIRECTION:
            return state.update(directionChanger(getEntity(state, action), action.target, action.callback));
    }
    return state;
};
