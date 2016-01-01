/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 31 Dec 2015
 */

export const MOVE = "MOVE";
export const ROTATE = "ROTATE";
export const TINT = "TINT";

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

export function tint(entity) {
    return {
        type: TINT,
        entity
    }
}

export function getByType(type) {
    switch (type) {
        case MOVE: return move;
        case ROTATE: return rotate;
        case TINT: return tint;
    }
}
