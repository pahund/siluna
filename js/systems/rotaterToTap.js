/**
 * rotaterToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */
import deepFreeze from "deep-freeze";
import rotatesTo from "../components/rotatesTo";
import Point from "../math/Point";

export default (prevEntities, target) => {

    const newEntities = {};
    Object.keys(prevEntities).forEach(entityId => {
        const entity = prevEntities[entityId],
            component = entity.rotatesToTap;
        newEntities[entityId] = !component ? entity : deepFreeze({
            ...entity,
            rotatesTo: rotatesTo(target, component.speed)
        });
    });
    return newEntities;
}
