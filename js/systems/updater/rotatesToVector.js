/**
 * rotatesToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import updateRotation from "./util/updateRotation";
import Vector from "../../math/Vector";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, speed, direction, sequenceIds } = prevComponent,
        { position, rotation } = spriteComponent;

    if (!direction) {
        direction = Math.sin(rotation - target.rad) < 0 ? "cw" : "ccw";
    }

    rotation = updateRotation(target, speed, timeDelta, rotation, direction);

    const isRunning = rotation !== target.rad ;

    return [
        isRunning ?
            deepFreeze({
                ...prevComponent,
                direction
            }) : undefined,
        deepFreeze({
            ...spriteComponent,
            rotation
        }),
        isRunning ? undefined : sequenceIds
    ];
}
