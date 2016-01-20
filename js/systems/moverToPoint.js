/**
 * moverToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import movesTo from "../components/movesTo";
import Point from "../math/Point";

export default (prevEntity, target, speed, easing, sequenceIds) => {
    let obsoleteSequenceIds = null;
    if (prevEntity.movesTo) {
        console.log(`[PH_LOG] we already have a “movesTo” component, these sequence IDs should be discarded (obsids): `, prevEntity.movesTo.sequenceIds);
        obsoleteSequenceIds = prevEntity.movesTo.sequenceIds;
    }
    return deepFreeze({
        ...prevEntity,
        movesTo: movesTo(target, speed, easing, sequenceIds, obsoleteSequenceIds)
    });
}
