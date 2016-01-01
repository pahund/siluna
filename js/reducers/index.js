/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { MOVE, ROTATE, TINT } from "../actions";
import moves from "../components/moves";

function move(state, action) {
    const entity = state.entity[action.entity];
    if (!entity.hasSprite || !entity.moves) {
        return;
    }
    let dx = entity.moves.dx,
        dy = entity.moves.dy;
    const x = entity.hasSprite.position.x + dx,
        y = entity.hasSprite.position.y + dy;
    if (x > state.config.gameDimensions.w || x < 0) {
        dx = dx * -1;
    }
    if (y > state.config.gameDimensions.h || y < 0) {
        dy = dy * -1;
    }
    entity.hasSprite = Object.assign(entity.hasSprite, { position: { x, y }});
    entity.moves = moves(dx, dy);
}

function rotate(state, action) {
    const entity = state.entity[action.entity];
    if (!entity.hasSprite || !entity.rotates) {
        return;
    }
    const dr = entity.rotates.dr,
        r = entity.hasSprite.rotation + dr;
    entity.hasSprite = Object.assign(entity.hasSprite, { rotation: r });
}

function tint(state, action) {
    const entity = state.entity[action.entity];
    if (!entity.hasSprite) {
        return;
    }
    entity.hasSprite = Object.assign(entity.hasSprite, { tint: Math.random() * 0xFFFFFF });
}

export default (state, action = null) => {
    switch (action.type) {
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
