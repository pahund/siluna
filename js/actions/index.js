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

    DEBUG = Symbol("“debug” action");

/* eslint complexity: [2, 13] */
export function getByType(type) {
    switch (type) {
        case TAP_ON_SCREEN: return tapOnScreen;
        case TOUCH_START_ON_SCREEN: return touchStartOnScreen;
        case TOUCH_MOVE_ON_SCREEN: return touchMoveOnScreen;
        case TOUCH_END_ON_SCREEN: return touchEndOnScreen;
        case ANIMATE: return animate;
        case UPDATE: return update;
        case TINT: return tint;
        case MOVE_TO_POINT: return moveToPoint;
        case ROTATE_TO_POINT: return rotateToPoint;
        case ROTATE_TO_VECTOR: return rotateToVector;
        case CHANGE_DIRECTION: return changeDirection;
        case START_MOVING_TO_POINT: return startMovingToPoint;
        case DEBUG: return debug;
    }
    throw new ReferenceError(`Cannot get action of type “${type}”`);
}
