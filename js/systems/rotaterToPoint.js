/**
 * rotaterToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import rotatesToPoint from "../components/rotatesToPoint";
import Point from "../math/Point";

export default (prevEntity, target, speed, sequenceIds) => {
    let obsoleteSequenceIds = null;
    if (prevEntity.rotatesToPoint) {
        console.log(`[PH_LOG] we already have a “rotatesToVector” component, these sequence IDs should be discarded: `, prevEntity.rotatesToPoint.sequenceIds);
        obsoleteSequenceIds = prevEntity.rotatesToPoint.sequenceIds;
    }
    return deepFreeze({
        ...prevEntity,
        rotatesToPoint: rotatesToPoint(target, speed, sequenceIds, obsoleteSequenceIds)
    });
}
