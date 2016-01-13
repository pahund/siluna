/**
 * movesToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default (speed = 1000) => deepFreeze({
    id: "movesToTap",
    speed
});
