/**
 * movesTo.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default (x, y, speed = 1) => deepFreeze({
    x,
    y,
    speed
});
