/**
 * rotatesToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import updateRotation from "./util/updateRotation";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, speed, direction, callback } = prevComponent,
        { rotation } = spriteComponent;

    if (!direction) {
        direction = Math.sin(rotation - target.rad) < 0 ? "cw" : "ccw";
    }

    rotation = updateRotation(target, speed, timeDelta, rotation, direction);

    const isRunning = rotation !== target.rad ;

    if (!isRunning) {
        callback();
    }

    return [
        isRunning ?
            deepFreeze({
                ...prevComponent,
                direction
            }) : undefined,
        deepFreeze({
            ...spriteComponent,
            rotation
        })
    ];
}
