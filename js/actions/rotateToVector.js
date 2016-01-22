/**
 * rotateToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { ROTATE_TO_VECTOR } from  ".";
import Vector from "../math/Vector";
import config from "../config";

export default (entity, target, speed = config.speed.rotation, callback) => {
    if (!(target instanceof Vector)) {
        throw new TypeError("Target argument passed to rotateToVector action needs to be a vector");
    }
    return {
        type: ROTATE_TO_VECTOR,
        entity,
        target,
        speed,
        callback
    }
}

