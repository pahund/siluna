/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { START_MOVING, MOVE, ROTATE, TINT } from "../actions";
import hasPosition from "../components/hasPosition";
import moves from "../components/moves";
import hasTint from "../components/hasTint";
import rotates from "../components/rotates";
import hasRotation from "../components/hasRotation";

function startMoving(state, action) {
    const entity = state.entity[action.entity];
    entity.moves = moves(action.dx, action.dy);
}

function move(state, action) {
    const entity = state.entity[action.entity];
    if (!entity.moves || !entity.hasPosition) {
        return;
    }
    let dx = entity.moves.dx,
        dy = entity.moves.dy;
    const x = entity.hasPosition.x + dx,
        y = entity.hasPosition.y + dy;
    if (x > state.config.gameDimensions.w || x < 0) {
        dx = dx * -1;
    }
    if (y > state.config.gameDimensions.h || y < 0) {
        dy = dy * -1;
    }
    entity.hasPosition = hasPosition(x ,y);
    entity.moves = moves(dx, dy);
}

function rotate(state, action) {
    const entity = state.entity[action.entity];
    if (!entity.rotates || !entity.hasRotation) {
        return;
    }
    const dr = entity.rotates.dr,
        r = entity.hasRotation.r + dr;

    entity.hasRotation = hasRotation(r);
}

function tint(state, action) {
    const entity = state.entity[action.entity];
    entity.hasTint = hasTint(Math.random() * 0xFFFFFF);
}

export default (state, action = null) => {
    switch (action.type) {
        case START_MOVING:
            startMoving(state, action);
            break;
        case MOVE:
            move(state, action);
            break;
        case ROTATE:
            rotate(state, action);
            break;
        case TINT:
            tint(state, action);
            break;
    }
    return state;
};
