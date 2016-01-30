/**
 * touchMoveOnScreen.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 30 Jan 2016
 */

import { TOUCH_MOVE_ON_SCREEN } from ".";
import Point from "../math/Point";

export default target => {
    if (!(target instanceof  Point)) {
        throw new TypeError("Target argument passed to touchMoveOnScreen action needs to be a point");
    }
    return {
        type: TOUCH_MOVE_ON_SCREEN,
        target
    };
}
