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
    MOVE = "MOVE",
    ROTATE = "ROTATE",
    TINT = "TINT";

export function move(entity) {
    return {
        type: MOVE,
        entity
    };
}

export function rotate(entity) {
    return {
        type: ROTATE,
        entity
    };
}

export function getByType(type) {
    switch (type) {
        case UPDATE: return update;
        case MOVE: return move;
        case ROTATE: return rotate;
        case TINT: return tint;
    }
}
