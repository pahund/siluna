/**
 * directionChanger.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Jan 2016
 */

import {
    HAS_SPRITE,
    HAS_SPINE,
    ROTATES_TO_POINT,
    MOVES_WITH_ACCELERATION
} from "../components";
import rotatesToPoint from "../components/rotatesToPoint";

export default (entity, target, rotationSpeed, movementSpeed, callback) => {
    const rotatesToPointComponent = entity.get(ROTATES_TO_POINT),
        movesWithAccelerationComponent = entity.get(MOVES_WITH_ACCELERATION),
        spriteComponent = entity.get(HAS_SPRITE) || entity.get(HAS_SPINE);
    let nextComponents = [];
    if (!spriteComponent) {
        throw new Error("Direction changer system received an entity that does not have a " +
                        `sprite component: ${entity.toString()}`);
    }
    if (rotatesToPointComponent) {
        const { rotation, position } = spriteComponent,
            velocity = target.subtractPoint(position),
            direction = Math.sin(rotation - velocity.rad) < 0 ? "cw" : "ccw";
        nextComponents.push({
            ...rotatesToPointComponent,
            target,
            velocity,
            direction
        })
    } else {
        nextComponents.push(rotatesToPoint(target, rotationSpeed, () => {}))
    }
    if (movesWithAccelerationComponent) {
        nextComponents.push({
            ...movesWithAccelerationComponent,
            target,
            velocity: target.subtractPoint(spriteComponent.position).normalized,
            targetSpeed: movementSpeed
        });
    }
    callback();
    return entity.update(...nextComponents);
}
