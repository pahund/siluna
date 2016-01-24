/**
 * rotatesToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
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
        console.log("[PH_LOG] invoking callback from rotate to point updater system"); // PH_TODO: REMOVE
        callback();
    }


    return [
        isRunning ?
            deepFreeze({
                ...prevComponent,
                velocity,
                direction
            }) : undefined,
        deepFreeze({
            ...spriteComponent,
            rotation
        })
    ];
}
