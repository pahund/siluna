/**
 * stopMovingToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Feb 2016
 */
import { STOP_MOVING_TO_POINT } from ".";

export default (
    entity,
    callback
) => {
    if (!entity) {
        throw new ReferenceError("Entity argument must be provided to stopMovingToPoint action");
    }
    return {
        type: STOP_MOVING_TO_POINT,
        entity,
        callback
    };
}
