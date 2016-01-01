/**
 * spriteManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */

import { getByType } from "../actions";

let initialized = false,
    store = null,
    stage = null,
    sprites = null;

function init(deps) {
    if (initialized) {
        throw new Error("sprite manager is already initialized");
    }
    store = deps.store;
    stage = deps.stage;
    sprites = new Map();
    update();
}

function get(id) {
    return sprites.get(id);
}

function create({
    image,
    position,
    anchor,
    rotation,
    tint
}) {
    const sprite = new PIXI.Sprite.fromImage(image);
    sprite.position = position;
    sprite.anchor = anchor;
    sprite.rotation = rotation;
    sprite.tint = tint;
    return sprite;
}

function makeTappable(sprite, {
    actionType, args
}) {
    sprite.interactive = true;
    const action = getByType(actionType);
    sprite.click = () => store.dispatch(action(...args));
    sprite.touchstart = () => store.dispatch(action(...args));
}

function add(id, spriteOptions, tapOptions) {
    const sprite = create(spriteOptions);
    if (tapOptions) {
        makeTappable(sprite, tapOptions);
    }
    stage.addChild(sprite);
    sprites.set(id, sprite);
    return sprite;
}

function update() {
    const state = store.getState();
    for (const [ id, sprite ] of sprites) {
        const entity = state.entity[id];

        /* delete sprite if its entity was removed from the store */
        if (!entity) {
            sprites.delete(id);
            continue;
        }

        /* update sprite */
        if (entity.hasSprite) {
            const { position, rotation, tint } = entity.hasSprite;
            sprite.position = position;
            sprite.rotation = rotation;
            sprite.tint = tint;
        }
    }

    Object.keys(state.entity).forEach(id => {
        const { hasSprite, respondsToTap } = state.entity[id];
        if (sprites.has(id) || !hasSprite) {
            return;
        }
        /* add sprite if there is an entity without corresponding sprite */
        add(id, hasSprite, respondsToTap);
    });
}

export default {
    init, update, get
};
