/**
 * moveToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import { MOVE_TO_TAP } from  ".";
import Point from "../math/Point";

export default (target, speed) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to moveToTap action needs to be a point");
    }
    return {
        type: MOVE_TO_TAP,
        target,
        speed
    }
}
