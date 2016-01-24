/**
 * rotaterToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import rotatesToPoint from "../components/rotatesToPoint";

export default (prevEntity, target, speed, callback) => {
    return deepFreeze({
        ...prevEntity,
        rotatesToPoint: rotatesToPoint(target, speed, callback)
    });
}
