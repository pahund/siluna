/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import tapOnScreen from "./tapOnScreen";
import touchStartOnScreen from "./touchStartOnScreen";
import touchMoveOnScreen from "./touchMoveOnScreen";
import touchEndOnScreen from "./touchEndOnScreen";
import animate from "./animate";
import update from "./update";
import tint from "./tint";
import moveToPoint from "./moveToPoint";
import rotateToPoint from "./rotateToPoint";
import rotateToVector from "./rotateToVector";
import changeDirection from "./changeDirection";
import startMovingToPoint from "./startMovingToPoint";
import stopMovingToPoint from "./stopMovingToPoint";
import delay from "./delay";
import debug from "./debug";

export const
    // placeholders in instances of Action that are resolved by the triggers reducer
    CURRENT_TAP = Symbol("current tap placeholder for actions"),
    CURRENT_ENTITY = Symbol("current entity placeholder for actions"),

    // user interaction
    TAP_ON_SCREEN = Symbol("“tap on screen” action"),
    TOUCH_START_ON_SCREEN = Symbol("“touch start on screen” action"),
    TOUCH_MOVE_ON_SCREEN = Symbol("“touch move on screen” action"),
    TOUCH_END_ON_SCREEN = Symbol("“touch end on screen” action"),

    // actions that affect entities
    ANIMATE = Symbol("“animate” action"),
    UPDATE = Symbol("“update” action"),
    TINT = Symbol("“tint” action"),
    MOVE_TO_POINT = Symbol("“move to point” action"),
    ROTATE_TO_POINT = Symbol("“rotate to point” action"),
    ROTATE_TO_VECTOR = Symbol("“rotate to vector” action"),
    CHANGE_DIRECTION = Symbol("“change direction” action"),
    START_MOVING_TO_POINT = Symbol("“start moving to point” action"),
    STOP_MOVING_TO_POINT = Symbol("“stop moving to point” action"),

    DELAY = Symbol("“delay” action"),
    DEBUG = Symbol("“debug” action");

const mapping = {
    [TAP_ON_SCREEN]: tapOnScreen,
    [TOUCH_START_ON_SCREEN]: touchStartOnScreen,
    [TOUCH_MOVE_ON_SCREEN]: touchMoveOnScreen,
    [TOUCH_END_ON_SCREEN]: touchEndOnScreen,
    [ANIMATE]: animate,
    [UPDATE]: update,
    [TINT]: tint,
    [MOVE_TO_POINT]: moveToPoint,
    [ROTATE_TO_POINT]: rotateToPoint,
    [ROTATE_TO_VECTOR]: rotateToVector,
    [CHANGE_DIRECTION]: changeDirection,
    [START_MOVING_TO_POINT]: startMovingToPoint,
    [STOP_MOVING_TO_POINT]: stopMovingToPoint,
    [DELAY]: delay,
    [DEBUG]: debug
};

export function getByType(type) {
    const func = mapping[type];
    if (func) {
        return func;
    }
    throw new ReferenceError(`Cannot get action of type “${type}”`);
}
