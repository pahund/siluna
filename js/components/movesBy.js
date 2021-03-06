/**
 * movesBy.js
 *
 * Component that moves an entity from its current position by a specified velocity.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import Vector from "../math/Vector";
import { NO_EASING } from "../math/easing";
import { MOVES_BY } from ".";

export default (velocity, speed = 1000, easing = NO_EASING, sequenceIds, obsoleteSequenceIds) => {
    if (!(velocity instanceof Vector)) {
        throw new TypeError("Velocity argument passed to movesBy component needs to be a vector");
    }
    return {
        id: MOVES_BY,
        velocity,
        speed,
        elapsed: 0,
        easing,
        sequenceIds,
        obsoleteSequenceIds
    };
}
