/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import tapOnScreen from "./tapOnScreen";
import animate from "./animate";
import update from "./update";
import tint from "./tint";
import moveToPoint from "./moveToPoint";
import rotateToPoint from "./rotateToPoint";
import rotateToVector from "./rotateToVector";

export const
    // placeholders in instances of Action that are resolved by the triggers reducer
    CURRENT_TAP = Symbol("current tap placeholder for actions"),
    CURRENT_ENTITY = Symbol("current entity placeholder for actions"),

    // actions that affect entities
    TAP_ON_SCREEN = Symbol("“tap on screen” action"),
    ANIMATE = Symbol("“animate” action"),
    UPDATE = Symbol("“update” action"),
    TINT = Symbol("“tint” action"),
    MOVE_TO_POINT = Symbol("“move to point” action"),
    ROTATE_TO_POINT = Symbol("“rotate to point” action"),
    ROTATE_TO_VECTOR = Symbol("“rotate to vector” action");

export function getByType(type) {
    switch (type) {
        case TAP_ON_SCREEN: return tapOnScreen;
        case ANIMATE: return animate;
        case UPDATE: return update;
        case TINT: return tint;
        case MOVE_TO_POINT: return moveToPoint;
        case ROTATE_TO_POINT: return rotateToPoint;
        case ROTATE_TO_VECTOR: return rotateToVector;
    }
    throw new ReferenceError(`Cannot get action of type “${type}”`);
}
