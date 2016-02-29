/**
 * movesWithAcceleration.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import { PIXELS_PER_SECOND_FACTOR } from "../../constants";
import loggerFactory from "../../debugUtils/loggerFactory";
import approach from "../../math/approach";

let log;

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, callback, speed, lerpSpeed, targetSpeed } = prevComponent,
        { position } = spriteComponent;

    if (speed === undefined) {
        log = loggerFactory();
    }

    speed = approach(targetSpeed, speed || 0, lerpSpeed * timeDelta);

    if (speed === targetSpeed) {
        log("target speed reached");
    }

    velocity = velocity || target.subtractPoint(position).normalized;
    position = position.addVector(velocity.multiply(speed * timeDelta * PIXELS_PER_SECOND_FACTOR));

    // gradually stop moving if entity has moved past the target point
    if (target.subtractPoint(position).dotProduct(velocity) <= -0.5) {
        log("starting to slow down");
        targetSpeed = 0;
    }

    const isRunning = speed > 0;

    if (!isRunning) {
        log("stopped");
        callback();
    }

    return [
        isRunning ? {
            ...prevComponent,
            velocity,
            speed,
            targetSpeed
        } : undefined,
        {
            ...spriteComponent,
            position
        }
    ];
}
