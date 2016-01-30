/**
 * hasSprite.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */
import Point from "../math/Point";
import { HAS_SPRITE } from ".";

const defaults = {
    position: new Point(0, 0),
    anchor: {
        x: 0.5,
        y: 0.5
    },
    rotation: 0,
    tint: 0xFFFFFF,
    scale: 1
};

export default (image, {
    position = defaults.position,
    anchor = defaults.anchor,
    rotation = defaults.rotation,
    tint = defaults.tint,
    scale = defaults.scale
} = defaults) => {
    if (!(position instanceof Point)) {
        throw new TypeError("Position argument passed to hasSprite component needs to be a point");
    }
    return {
        id: HAS_SPRITE,
        image,
        position,
        anchor,
        rotation,
        tint,
        scale
    };
}
