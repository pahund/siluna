/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import update from "./update";
import tint from "./tint";
import tapOnScreen from "./tapOnScreen";
import rotateToPoint from "./rotateToPoint";
import moveToPoint from "./moveToPoint";
import animate from "./animate";

export const
    TAP_ON_SCREEN = "TAP_ON_SCREEN",
    ANIMATE = "ANIMATE",
    CURRENT_TAP = "CURRENT_TAP",
    CURRENT_ENTITY = "CURRENT_ENTITY",
    UPDATE = "UPDATE",
    TINT = "TINT",
    MOVE_TO_POINT = "MOVE_TO_POINT",
    ROTATE_TO_POINT = "ROTATE_TO_POINT";

export function getByType(type) {
    switch (type) {
        case TAP_ON_SCREEN: return tapOnScreen;
        case UPDATE: return update;
        case TINT: return tint;
        case MOVE_TO_POINT: return moveToPoint;
        case ROTATE_TO_POINT: return rotateToPoint;
        case ANIMATE: return animate;
    }
}
