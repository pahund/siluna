/**
 * moverToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import movesTo from "../components/movesTo";

export default (prevEntity, target, speed, easing, callback) => (
    new Map([
        ...prevEntity,
        [ "movesTo", movesTo(target, speed, easing, callback) ]
    ])
)
