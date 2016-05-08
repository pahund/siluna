/**
 * rotatesToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import updateRotation from "./util/updateRotation";
import calculateRotationDirection from "../../math/calculateRotationDirection";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, speed, direction, callback } = prevComponent,
        { position, rotation } = spriteComponent;

    if (!velocity) {
        velocity = target.subtractPoint(position);
    }

    if (!direction) {
        direction = calculateRotationDirection(velocity.rad, rotation);
    }

    rotation = updateRotation(velocity, speed, timeDelta, rotation, direction);

    const isRunning = rotation !== velocity.rad;

    if (!isRunning) {
        callback();
    }


    return [
        isRunning ? {
            ...prevComponent,
            velocity,
            direction
        } : undefined,
        {
            ...spriteComponent,
            rotation
        }
    ];
}
