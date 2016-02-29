/**
 * moveToPointStarter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import movesWithAcceleration from "../components/movesWithAcceleration";

export default (prevEntity, target, targetSpeed, lerpSpeed, callback) => prevEntity.update(movesWithAcceleration(target, targetSpeed, lerpSpeed, callback));
