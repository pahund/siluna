/**
 * updatePosition.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */

import Point from "../../../math/Point";
import easing from "../../../math/easing";

// additional scale to make sure that speed = 1 is equivalent to moving the sprite by 1px per second
const PIXELS_PER_SECOND_FACTOR = 0.0010416666666667;

export default (velocity, speed, timeDelta, prevElapsed, startPosition, easing) => {
    const distance = velocity.normalized.multiply(speed * timeDelta * PIXELS_PER_SECOND_FACTOR);
    let nextPosition = new Point(
        easing(
            prevElapsed,
            startPosition.x,
            velocity.x,
            velocity.length
        ),
        easing(
            prevElapsed,
            startPosition.y,
            velocity.y,
            velocity.length
        )
    );

    const nextElapsed = Math.min(prevElapsed + distance.length, velocity.length);

    return [ nextPosition, nextElapsed ];
}

