/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

import update from "./update";
import tint from "./tint";

export const
    UPDATE = "UPDATE",
    TINT = "TINT",
    MOVE_TO_TAP = "MOVE_TO_TAP",
    ROTATE_TO_TAP = "ROTATE_TO_TAP";

export function getByType(type) {
    switch (type) {
        case UPDATE: return update;
        case TINT: return tint;
        case MOVE_TO_TAP: return moveToTap;
        case ROTATE_TO_TAP: return rotateToTap;
    }
}
