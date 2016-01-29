/**
 * rotaterToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import rotatesToVector from "../components/rotatesToVector";
import { ROTATES_TO_VECTOR } from "../components";

export default (prevEntity, target, speed, callback) => (
    new Map([
        ...prevEntity,
        [ ROTATES_TO_VECTOR, rotatesToVector(target, speed, callback) ]
    ])
)
