/**
 * spriteManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */

import PIXI from "pixi";
import Sprite from "./Sprite";
import { getByType } from "../actions";
import config from "../config";

let initialized = false,
    store = null,
    stage = null,
    resources = null,
    sprites = null;

function init(deps) {
    if (initialized) {
        throw new Error("sprite manager is already initialized");
    }
    store = deps.store;
    stage = deps.stage;
    resources = deps.resources;
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
    tint,
    scale
}) {
    const sprite = Sprite.fromImage(image);
    sprite.position = position;
    sprite.anchor = anchor;
    sprite.rotation = rotation;
    sprite.tint = tint;
    sprite.scale = scale;
    return sprite;
}

function createWithSpine({
    dataId,
    position,
    anchor,
    rotation,
    tint,
    scale
}) {
    const sprite = Sprite.fromSpine(resources[dataId].spineData);
    sprite.update(0);
    sprite.autoUpdate = false;
    sprite.position = position;
    sprite.anchor = anchor;
    sprite.rotation = rotation;
    sprite.tint = tint;
    sprite.scale = scale;
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
    sprite.appendTo(stage);
    sprites.set(id, sprite);
    return sprite;
}

function addWithSpine(id, spineOptions, tapOptions, animationOptions) {
    const sprite = createWithSpine(spineOptions);
    if (tapOptions) {
        makeTappable(sprite, tapOptions);
    }
    if (animationOptions) {
        sprite.state.setAnimationByName(0, animationOptions.animation, true);
        sprite.currentAnimation = animationOptions.animation;
    }
    sprite.appendTo(stage);
    sprites.set(id, sprite);
    return sprite;
}

function update(timeDelta) {
    const state = store.getState();
    for (const [ id, sprite ] of sprites) {
        const entity = state.entities[id];

        /* delete sprite if its entity was removed from the store */
        if (!entity) {
            sprites.delete(id);
            continue;
        }

        /* update sprite */
        const spriteOptions = entity.hasSprite || entity.hasSpine,
            animationOptions = entity.hasAnimation;
        if (spriteOptions) {
            const { position, rotation, tint } = spriteOptions;
            sprite.position = position;
            sprite.rotation = rotation;
            sprite.tint = tint;
        }
        if (animationOptions) {
            if (sprite.currentAnimation === animationOptions.animation) {
                sprite.update(timeDelta);
            } else {
                sprite.state.setAnimationByName(0, animationOptions.animation, true);
                sprite.currentAnimation = animationOptions.animation;
            }
        }
    }

    Object.keys(state.entities).forEach(id => {
        const { hasSprite, hasSpine, respondsToTap, hasAnimation } = state.entities[id];
        if (sprites.has(id) || (!hasSprite && !hasSpine)) {
            return;
        }
        /* add sprite if there is an entity without corresponding sprite */
        if (hasSprite) {
            add(id, hasSprite, respondsToTap);
        }
        if (hasSpine) {
            addWithSpine(id, hasSpine, respondsToTap, hasAnimation);
        }
    });
}

export default {
    init, update, get
};
