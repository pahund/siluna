/**
 * moves.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import deepFreeze from "deep-freeze";
import Vector from "../math/Vector";

export default velocity => {
    if (!(velocity instanceof Vector)) {
        throw new TypeError("Velocity argument passed to moves component needs to be a vector");
    }
    return deepFreeze({
        id: "moves",
        velocity
    });
}
