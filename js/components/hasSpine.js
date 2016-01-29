/**
 * hasSpine.js
 *
 * A special kind of sprite that uses animation data created with Spine.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Jan 2016
 */
import deepFreeze from "deep-freeze";
import Point from "../math/Point";
import { HAS_SPINE } from ".";

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

export default (dataId, {
    position = defaults.position,
    anchor = defaults.anchor,
    rotation = defaults.rotation,
    tint = defaults.tint,
    scale = defaults.scale
} = defaults) => {
    if (!(position instanceof Point)) {
        throw new TypeError("Position argument passed to hasSpine component needs to be a point");
    }
    return deepFreeze({
        id: HAS_SPINE,
        dataId,
        position,
        anchor,
        rotation,
        tint,
        scale
    });
}
