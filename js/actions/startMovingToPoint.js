/**
 * startMovingToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import { START_MOVING_TO_POINT } from  ".";
import Point from "../math/Point";
import config from "../config";

export default (
    entity,
    target,
    targetSpeed = config.speed.movement,
    lerpSpeed = config.speed.lerp,
    callback
) => {
    if (!entity) {
        throw new ReferenceError("Entity argument must be provided to startMovingToPoint action");
    }
    if (!target) {
        throw new ReferenceError("Target argument must be provided to startMovingToPoint action");
    }
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to startMovingToPoint action needs to be a point");
    }
    return {
        type: START_MOVING_TO_POINT,
        entity,
        target,
        targetSpeed,
        lerpSpeed,
        callback
    };
}
