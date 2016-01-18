/**
 * rotaterToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import rotatesToVector from "../components/rotatesToVector";
import Point from "../math/Point";

export default (prevEntity, target, speed, sequenceIds) => {
    return deepFreeze({
        ...prevEntity,
        rotatesToVector: rotatesToVector(target, speed, sequenceIds)
    });
}
