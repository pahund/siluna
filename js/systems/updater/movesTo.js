/**
 * movesTo.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “movesTo” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import deepFreeze from "deep-freeze";
import updatePosition from "./util/updatePosition";

export default (prevComponent, spriteComponent, timeDelta) => {
    let { target, velocity, speed, elapsed, startPosition, easing } = prevComponent,
        { position } = spriteComponent;

    if (!velocity) {
        velocity = target.subtractPoint(position);
    }

    if (!startPosition) {
        startPosition = position.clone();
    }

    [ position, elapsed ] = updatePosition(velocity, speed, timeDelta, elapsed, startPosition, easing);

    return [
        elapsed < velocity.length ? deepFreeze({
            ...prevComponent,
            velocity,
            elapsed,
            startPosition
        }) : undefined,
        deepFreeze({
            ...spriteComponent,
            position
        })
    ];
}

