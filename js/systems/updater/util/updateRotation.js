/**
 * updateRotation.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Jan 2016
 */

// additional scale to make sure that speed = 1 is equivalent to rotating the sprite by 1° per second
const DEGREE_PER_SECOND_FACTOR = 0.000017;

function angleDifference(a, b) {
    const diff = a - b;
    return diff + ((diff > Math.PI) ? -Math.PI * 2 : (diff < -Math.PI) ? Math.PI * 2 : 0);
}

export default (velocity, speed, timeDelta, prevRotation, direction) => {

    let targetRotation = velocity.rad,
        increment = timeDelta * speed * DEGREE_PER_SECOND_FACTOR,
        angleDiff = angleDifference(targetRotation, prevRotation);

    if (direction === "cw" && angleDiff <= increment) {
        return targetRotation;
    }

    if (direction === "ccw" && angleDiff >= increment) {
        return targetRotation;
    }

    return direction === "cw" ? prevRotation + increment : prevRotation - increment;
}
