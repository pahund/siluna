/**
 * rotaterToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import rotatesToVector from "../components/rotatesToVector";
import Point from "../math/Point";

export default (prevEntity, target, speed, sequenceIds) => {
    let obsoleteSequenceIds = null;
    if (prevEntity.rotatesToVector) {
        console.log(`[PH_LOG] we already have a “rotatesToVector” component, these sequence IDs should be discarded: `, prevEntity.rotatesToVector.sequenceIds);
        obsoleteSequenceIds = prevEntity.rotatesToVector.sequenceIds;
    }
    return deepFreeze({
        ...prevEntity,
        rotatesToVector: rotatesToVector(target, speed, sequenceIds, obsoleteSequenceIds)
    });
}
