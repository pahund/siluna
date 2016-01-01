/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 31 Dec 2015
 */

export const START_MOVING = "START_MOVING";
export const MOVE = "MOVE";
export const ROTATE = "ROTATE";
export const TINT = "TINT";

export function startMoving(entity, dx, dy) {
    return {
        type: START_MOVING,
        entity,
        dx,
        dy
    };
}

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
