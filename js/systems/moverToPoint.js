/**
 * moverToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import movesTo from "../components/movesTo";
import Point from "../math/Point";

export default (prevEntity, target, speed, easing, callback) => {
    return deepFreeze({
        ...prevEntity,
        movesTo: movesTo(target, speed, easing, callback)
    });
}
