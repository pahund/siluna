/**
 * movesTo.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jan 2016
 */
import deepFreeze from "deep-freeze";
import Point from "../math/Point";
import { NO_EASING } from "../math/easing";
import { MOVES_TO } from ".";

export default (target, speed = 1000, easing = NO_EASING, callback) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to movesTo component needs to be a point");
    }
    return deepFreeze({
        id: MOVES_TO,
        target,
        speed,
        elapsed: 0,
        easing,
        callback
    });
}
