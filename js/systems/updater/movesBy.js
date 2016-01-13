/**
 * movesBy.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “movesBy” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import updatePosition from "./util/updatePosition";

// additional scale to make sure that speed = 1 is equivalent to moving the sprite by 1px per second
const PIXELS_PER_SECOND_FACTOR = 0.0010416666666667;

let start = Date.now();

export default (prevComponent, spriteComponent, timeDelta) => {
    let { velocity, speed, elapsed } = prevComponent,
        position = spriteComponent.position;

    [ position, elapsed ] = updatePosition(velocity, speed, timeDelta, position, elapsed);

    return [
        elapsed < velocity.length ? deepFreeze({
            ...prevComponent,
            elapsed
        }) : undefined,
        deepFreeze({
            ...spriteComponent,
            position
        })
    ];
}

