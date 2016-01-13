/**
 * moverToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import deepFreeze from "deep-freeze";
import movesTo from "../components/movesTo";
import Point from "../math/Point";

export default (prevEntities, target) => {
    const newEntities = {};
    Object.keys(prevEntities).forEach(entityId => {
        const entity = prevEntities[entityId],
            component = entity.movesToTap;
        newEntities[entityId] = !component ? entity : deepFreeze({
            ...entity,
            movesTo: movesTo(target, component.speed)
        });
    });
    return newEntities;
}
