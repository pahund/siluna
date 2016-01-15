/**
 * rotateToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import { ROTATE_TO_TAP } from  ".";
import Point from "../math/Point";

export default target => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to rotateToTap action needs to be a point");
    }
    return {
        type: ROTATE_TO_TAP,
        target
    }
}

