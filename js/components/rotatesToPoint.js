/**
 * rotatesToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import Point from "../math/Point";

export default (target, speed = 5, callback) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to rotatesToPoint component needs to be a point");
    }
    return deepFreeze({
        id: "rotatesToPoint",
        target,
        speed,
        elapsed: 0,
        callback
    });
}

