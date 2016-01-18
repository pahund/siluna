/**
 * moveToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { MOVE_TO_POINT } from  ".";
import { NO_EASING } from "../math/easing";
import Point from "../math/Point";
import config from "../config";

export default (entity, target, speed = config.speed.movement, easing = NO_EASING) => {
    if (!entity) {
        throw new ReferenceError("Entity argument must be provided to moveToPoint action");
    }
    if (!target) {
        throw new ReferenceError("Target argument must be provided to moveToPoint action");
    }
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to moveToPoint action needs to be a point");
    }
    return {
        type: MOVE_TO_POINT,
        entity,
        target,
        speed,
        easing,
        hasDuration: true
    }
}

