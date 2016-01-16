/**
 * movesToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import deepFreeze from "deep-freeze";
import { noEasing } from "../math/easing";

export default (speed = 1000, easing = noEasing) => deepFreeze({
    id: "movesToTap",
    speed,
    easing
});
