/**
 * tapOnScreen.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { TAP_ON_SCREEN } from  ".";
import Point from "../math/Point";

export default target => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to tapOnScreen action needs to be a point");
    }
    return {
        type: TAP_ON_SCREEN,
        target
    }
}
