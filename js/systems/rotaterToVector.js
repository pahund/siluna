/**
 * rotaterToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import rotatesToVector from "../components/rotatesToVector";

export default (prevEntity, target, speed, callback) => {
    return deepFreeze({
        ...prevEntity,
        rotatesToVector: rotatesToVector(target, speed, callback)
    });
}
