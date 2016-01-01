/**
 * spriteManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */

let initialized = false,
    store = null,
    stage = null,
    sprites = new Map();

function init(deps) {
    if (initialized) {
        throw new Error("sprite manager is already initalized");
    }
    store = deps.store;
    stage = deps.stage;
}

function add({ id, image, anchor }) {
    const sprite = new PIXI.Sprite.fromImage(image);
    sprite.anchor = anchor;
    stage.addChild(sprite);
    sprites.set(id, sprite);
    return sprite;
}

function update() {
    const state = store.getState();
    for (const entry of sprites) {
        const [ id, sprite ] = entry,
            entity = state.entity[id];

        if (!entity) {
            sprites.delete(id);
            continue;
        }

        if (entity.hasPosition) {
            const { x, y } = entity.hasPosition;
            sprite.position.x = x;
            sprite.position.y = y;
        }

        if (entity.hasRotation) {
            sprite.rotation = entity.hasRotation.r;
        }

        if (entity.hasTint) {
            sprite.tint = entity.hasTint.tint;
        }
    }
}

export default {
    init, add, update
};
