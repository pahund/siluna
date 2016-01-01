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
    update();
}

function get(id) {
    return sprites.get(id);
}

function add(id, {
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
        const hasSprite = state.entity[id].hasSprite;
        if (sprites.has(id) || !hasSprite) {
            return;
        }
        /* add sprite if there is an entity without corresponding sprite */
        add(id, hasSprite);
    });
}

export default {
    init, update, get
};
