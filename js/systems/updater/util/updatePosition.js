/**
 * updatePosition.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */

import Point from "../../../math/Point";
import { PIXELS_PER_SECOND_FACTOR } from "../../../constants";

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

