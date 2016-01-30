/**
 * rotatesToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import updateRotation from "./util/updateRotation";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, speed, direction, callback } = prevComponent,
        { position, rotation } = spriteComponent;

    if (!velocity) {
        velocity = target.subtractPoint(position);
    }

    if (!direction) {
        direction = Math.sin(rotation - velocity.rad) < 0 ? "cw" : "ccw";
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
