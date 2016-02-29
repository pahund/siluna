/**
 * movesWithAcceleration.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import Point from "../math/Point";
import { MOVES_WITH_ACCELERATION } from ".";
import config from "../config";

export default (
    target,
    targetSpeed = config.speed.movement,
    lerpSpeed = config.speed.lerp,
    callback
) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to movesWithAcceleration component needs to be a point");
    }
    return {
        id: MOVES_WITH_ACCELERATION,
        target,
        targetSpeed,
        lerpSpeed,
        callback
    };
}
