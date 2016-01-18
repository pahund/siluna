/**
 * rotateToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { ROTATE_TO_POINT } from  ".";
import Point from "../math/Point";
import config from "../config";

export default (entity, target, speed = config.speed.rotation) => {
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to rotateToPoint action needs to be a point");
    }
    return {
        type: ROTATE_TO_POINT,
        entity,
        target,
        speed,
        hasDuration: true
    }
}

