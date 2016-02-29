/**
 * moveToPointStarter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import movesWithAcceleration from "../components/movesWithAcceleration";
import { MOVES_WITH_ACCELERATION } from "../components";

export default (prevEntity, target, targetSpeed, lerpSpeed, callback) => {
    let prevComponent = prevEntity.get(MOVES_WITH_ACCELERATION),
        nextComponent;
    if (!prevComponent) {
        nextComponent = movesWithAcceleration(target, targetSpeed, lerpSpeed, callback)
    } else {
        nextComponent = {
            ...prevComponent,
            target,
            targetSpeed,
            lerpSpeed,
            velocity: null
        };
    }
    return prevEntity.update(nextComponent);
}
