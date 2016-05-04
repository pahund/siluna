/**
 * changeDirection.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Jan 2016
 */
import { CHANGE_DIRECTION } from ".";
import Point from "../math/Point";
import config from "../config";

export default (
    entity, target,
    rotationSpeed = config.speed.rotation,
    movementSpeed = config.speed.movement,
    callback
) => {
    if (!entity) {
        throw new ReferenceError("Entity argument must be provided to changeDirection action");
    }
    if (!target) {
        throw new ReferenceError("Target argument must be provided to changeDirection action");
    }
    if (!(target instanceof Point)) {
        throw new TypeError("Target argument passed to changeDirection action needs to be a point");
    }
    return {
        type: CHANGE_DIRECTION,
        entity,
        target,
        rotationSpeed,
        movementSpeed,
        callback
    };
}
