/**
 * rotaterToVector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import rotatesToVector from "../components/rotatesToVector";

export default (prevEntity, target, speed, callback) => (
    new Map([
        ...prevEntity,
        [ "rotatesToVector", rotatesToVector(target, speed, callback) ]
    ])
)
