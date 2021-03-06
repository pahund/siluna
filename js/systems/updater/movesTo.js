/**
 * movesTo.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “movesTo” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import updatePosition from "./util/updatePosition";
import { getByType } from "../../math/easing";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, speed, elapsed, startPosition, easing, callback } = prevComponent,
        { position } = spriteComponent;

    easing = getByType(easing);

    if (!velocity) {
        velocity = target.subtractPoint(position);
    }

    if (!startPosition) {
        startPosition = position.clone();
    }

    [ position, elapsed ] = updatePosition(velocity, speed, timeDelta, elapsed, startPosition, easing);

    const isRunning = elapsed < velocity.length;

    if (!isRunning) {
        callback();
    }

    return [
        isRunning ? {
            ...prevComponent,
            velocity,
            elapsed,
            startPosition
        } : undefined,
        {
            ...spriteComponent,
            position
        }
    ];
}

