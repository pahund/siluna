/**
 * moverToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import movesTo from "../components/movesTo";
import { MOVES_TO } from "../components";

export default (prevEntity, target, speed, easing, callback) => (
    new Map([
        ...prevEntity,
        [ MOVES_TO, movesTo(target, speed, easing, callback) ]
    ])
)
