/**
 * hasSprite.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */
import deepFreeze from "deep-freeze";

const defaults = {
    position: {
        x: 0,
        y: 0
    },
    anchor: {
        x: 0.5,
        y: 0.5
    },
    rotation: 0,
    tint: 0xFFFFFF
};

export default (image, {
    position = defaults.position,
    anchor = defaults.anchor,
    rotation = defaults.rotation,
    tint = defaults.tint
} = defaults) => deepFreeze({
    image,
    position,
    anchor,
    rotation,
    tint
});
