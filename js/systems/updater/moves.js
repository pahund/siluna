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

export default (component, spriteComponent) => {
    let dx = component.dx,
        dy = component.dy;
    const x = spriteComponent.position.x + dx,
        y = spriteComponent.position.y + dy;
    if (x > config.gameDimensions.w || x < 0) {
        dx = dx * -1;
    }
    if (y > config.gameDimensions.h || y < 0) {
        dy = dy * -1;
    }
    return [
        moves(dx, dy),
        deepFreeze({
            ...spriteComponent,
            position: {
                x, y
            }
        })
    ]
}

