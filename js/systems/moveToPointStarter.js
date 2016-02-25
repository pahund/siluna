/**
 * moveToPointStarter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import movesWithAcceleration from "../components/movesWithAcceleration";

export default (prevEntity, target, lerpSpeed, callback) => prevEntity.update(movesWithAcceleration(target, lerpSpeed, callback));
