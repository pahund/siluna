/**
 * rotatesToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import Vector from "../math/Vector";
import { ROTATES_TO_VECTOR } from ".";

export default (target, speed = 5, callback) => {
    if (!(target instanceof Vector)) {
        throw new TypeError("Target argument passed to rotatesToVector component needs to be a vector");
    }
    return deepFreeze({
        id: ROTATES_TO_VECTOR,
        target,
        speed,
        elapsed: 0,
        callback
    });
}

