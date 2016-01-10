/**
 * movesTo.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default (target, speed = 1) => deepFreeze({
    id: "movesTo",
    target,
    speed
});
