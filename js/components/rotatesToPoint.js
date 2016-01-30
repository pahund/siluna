/**
 * rotatesToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import Point from "../math/Point";
import { ROTATES_TO_POINT } from ".";

export default (target, speed = 5, callback) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to rotatesToPoint component needs to be a point");
    }
    return {
        id: ROTATES_TO_POINT,
        target,
        speed,
        elapsed: 0,
        callback
    };
}

