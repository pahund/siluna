/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { MOVE, ROTATE, TINT } from "../actions";

function move(state, action) {
    const entity = state.entity[action.entity];
    entity.position.x += entity.increment.x;
    entity.position.y += entity.increment.y;
    if (entity.position.x > state.config.gameDimensions.w || entity.position.x < 0) {
        entity.increment.x = entity.increment.x * -1;
    }
    if (entity.position.y > state.config.gameDimensions.h || entity.position.y < 0) {
        entity.increment.y = entity.increment.y * -1;
    }
}

function rotate(state, action) {
    const entity = state.entity[action.entity];
    entity.rotation += entity.increment.r;
}

function tint(state, action) {
    const entity = state.entity[action.entity];
    entity.tint = Math.random() * 0xFFFFFF;
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
