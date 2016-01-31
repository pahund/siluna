/**
 * directionChanger.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Jan 2016
 */

import { MOVES_TO, ROTATES_TO_POINT } from "../components";

export default (entity, target, callback) => {
    const movesToPointComponent = entity.get(MOVES_TO),
        rotatesToPointComponent = entity.get(ROTATES_TO_POINT);
    if (movesToPointComponent) {
        console.log("[PH_LOG] movesToPointComponent: ", movesToPointComponent); // PH_TODO: REMOVE
    }
    if (rotatesToPointComponent) {
        console.log("[PH_LOG] rotatesToPointComponent: ", rotatesToPointComponent); // PH_TODO: REMOVE
    }
    callback();
    return entity;
}
