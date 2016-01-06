/**
 * moveToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import { MOVE_TO_TAP } from  ".";

export default (position, speed) => ({
    type: MOVE_TO_TAP,
    position,
    speed
});
