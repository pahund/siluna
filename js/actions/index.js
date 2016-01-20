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
import resumeSequence from "./resumeSequence";
import clearDispatches from "./clearDispatches";

export const
    // placeholders in instances of Action that are resolved by the triggers reducer
    CURRENT_TAP = "CURRENT_TAP",
    CURRENT_ENTITY = "CURRENT_ENTITY",

    // actions that affect entities
    TAP_ON_SCREEN = "TAP_ON_SCREEN",
    ANIMATE = "ANIMATE",
    UPDATE = "UPDATE",
    TINT = "TINT",
    MOVE_TO_POINT = "MOVE_TO_POINT",
    ROTATE_TO_POINT = "ROTATE_TO_POINT",
    ROTATE_TO_VECTOR = "ROTATE_TO_VECTOR",

    // actions used for trigger mechanics
    RESUME_SEQUENCE = "RESUME_SEQUENCE",
    CLEAR_DISPATCHES = "CLEAR_DISPATCHES",
    CLEAR_OBSOLETE_SEQUENCES = "CLEAR_OBSOLETE_SEQUENCES";

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
