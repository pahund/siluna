/**
 * movesBy.js
 *
 * Component that moves an entity from its current position by a specified velocity.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import Vector from "../math/Vector";
import { noEasing } from "../math/easing";

export default (velocity, speed = 1000, easing = noEasing) => {
    if (!(velocity instanceof Vector)) {
        throw new TypeError("Velocity argument passed to movesBy component needs to be a vector");
    }
    return deepFreeze({
        id: "movesBy",
        velocity,
        speed,
        elapsed: 0,
        easing
    });
}
