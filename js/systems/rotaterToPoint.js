/**
 * rotaterToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import rotatesToPoint from "../components/rotatesToPoint";

export default (prevEntity, target, speed, callback) => prevEntity.update(rotatesToPoint(target, speed, callback));

