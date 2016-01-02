/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { MOVE, ROTATE, TINT } from "../actions";
import moves from "../components/moves";

function move(state, action) {
    const entity = state.entity[action.entity],
        config = state.config;
    if (!entity.hasSprite) {
        return;
    }
    if (entity.moves) {
        updateMoves(entity, config);
    }
    if (entity.movesTo) {
        updateMovesTo(entity);
    }
}

function updateMoves(entity, config) {
    let dx = entity.moves.dx,
        dy = entity.moves.dy;
    const x = entity.hasSprite.position.x + dx,
        y = entity.hasSprite.position.y + dy;
    if (x > config.gameDimensions.w || x < 0) {
        dx = dx * -1;
    }
    if (y > config.gameDimensions.h || y < 0) {
        dy = dy * -1;
    }
    entity.hasSprite = Object.assign(entity.hasSprite, { position: { x, y }});
    entity.moves = moves(dx, dy);
}

function updateMovesTo(entity) {
    const target = {
            x: entity.movesTo.x,
            y: entity.movesTo.y
        },
        speed = entity.movesTo.speed,
        position = entity.hasSprite.position,
        delta = {
            x: target.x - position.x,
            y: target.y - position.y
        },
        ratio = calculateRatio(delta),
        increment = calculateIncrement(delta, ratio, speed);
    position.x += increment.x;
    position.y += increment.y;
    if (position.x === target.x && position.y === target.y) {
        delete entity.movesTo;
    }
    entity.hasSprite = Object.assign(entity.hasSprite, { position });
}

function calculateRatio({ x, y }) {
    if (x === 0 || y === 0) {
        return 1;
    }
    const ax = Math.abs(x),
        ay = Math.abs(y);
    return ax > ay ? ay / ax : ax / ay;
}

function calculateIncrement(delta, ratio, speed) {
    let increment = {
        x: delta.x < 0 ? -1 * pickRatio(delta.x, delta.y, ratio) * speed : pickRatio(delta.x, delta.y, ratio) * speed,
        y: delta.y < 0 ? -1 * pickRatio(delta.y, delta.x, ratio) * speed : pickRatio(delta.y, delta.x, ratio) * speed
    };
    if (Math.abs(increment.x) >= Math.abs(delta.x)) {
        increment.x = delta.x;
    }
    if (Math.abs(increment.y) >= Math.abs(delta.y)) {
        increment.y = delta.y;
    }
    return increment;
}

function pickRatio(thisDelta, thatDelta, ratio) {
    return Math.abs(thisDelta) < Math.abs(thatDelta) ? ratio : 1;
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
