/**
 * rotatesTo.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import updateRotation from "./util/updateRotation";
import Vector from "../../math/Vector";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, speed, direction } = prevComponent,
        { position, rotation } = spriteComponent;

    if (!velocity) {
        velocity = target.subtractPoint(position);
    }

    if (!direction) {
        direction = Math.sin(rotation - velocity.rad) < 0 ? "cw" : "ccw";
    }

    rotation = updateRotation(velocity, speed, timeDelta, rotation, direction);

    return [
        rotation !== velocity.rad ?
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
