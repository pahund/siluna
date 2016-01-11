/**
 * moves.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “moves” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */

import config from "../../config";
import moves from "../../components/moves";
import deepFreeze from "deep-freeze";
import Point from "../../math/Point";

export default (component, spriteComponent) => {
    const velocity = component.velocity.clone(),
        position = spriteComponent.position.addVector(velocity);
    if (position.x > config.gameDimensions.w || position.x < 0) {
        velocity.x *= -1;
    }
    if (position.y > config.gameDimensions.h || position.y < 0) {
        velocity.y *= -1;
    }
    return [
        moves(velocity),
        deepFreeze({
            ...spriteComponent,
            position
        })
    ]
}

