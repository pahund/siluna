/**
 * updatePosition.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
// additional scale to make sure that speed = 1 is equivalent to moving the sprite by 1px per second
const PIXELS_PER_SECOND_FACTOR = 0.0010416666666667;

export default (velocity, speed, timeDelta, prevPosition, prevElapsed) => {
    const distance = velocity.normalized.multiply(speed * timeDelta * PIXELS_PER_SECOND_FACTOR);
    let nextPosition = prevPosition.addVector(distance);

    const nextElapsed = prevElapsed + distance.length;

    if (prevElapsed > velocity.length) {
        nextPosition = nextPosition.addVector(velocity.normalized.multiply(-1 * (nextElapsed - velocity.length)));
    }

    return [ nextPosition, nextElapsed ];
}

