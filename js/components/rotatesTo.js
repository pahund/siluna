/**
 * rotatesTo.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import Point from "../math/Point";

export default (target, speed = 5) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to rotatesTo component needs to be a point");
    }
    return deepFreeze({
        id: "rotatesTo",
        target,
        speed,
        elapsed: 0
    });
}

