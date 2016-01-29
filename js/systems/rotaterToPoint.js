/**
 * rotaterToPoint.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import rotatesToPoint from "../components/rotatesToPoint";
import { ROTATES_TO_POINT } from "../components";

export default (prevEntity, target, speed, callback) => (
    new Map([
        ...prevEntity,
        [ ROTATES_TO_POINT, rotatesToPoint(target, speed, callback) ]
    ])
)
