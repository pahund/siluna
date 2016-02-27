/**
 * movesWithAcceleration.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import { PIXELS_PER_SECOND_FACTOR } from "../../constants";
import Vector from "../../math/Vector";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, targetVelocity, lerpSpeed, callback } = prevComponent,
        { position } = spriteComponent;

    targetVelocity = targetVelocity || target.subtractPoint(position).normalized;
    velocity = velocity || new Vector(0, 0);
    velocity = velocity.approach(targetVelocity, timeDelta * lerpSpeed * PIXELS_PER_SECOND_FACTOR);
    position = position.addVector(velocity.multiply(timeDelta));

    // gradually stop moving if entity has moved past the target point
    if (target.subtractPoint(position).dotProduct(velocity) <= -0.5) {
        targetVelocity = new Vector(0, 0);
    }

    const isRunning = !velocity.equals(new Vector(0, 0));

    if (!isRunning) {
        callback();
    }

    return [
        isRunning ? {
            ...prevComponent,
            velocity,
            targetVelocity
        } : undefined,
        {
            ...spriteComponent,
            position
        }
    ];
}
