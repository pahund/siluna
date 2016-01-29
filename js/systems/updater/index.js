/**
 * index.js
 *
 * The Updater system is responsible for executing updates on components that require an update on every cycle of the
 * game loop. This system delegates to various sub-systems, according to the entity's components.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import moves from "./moves";
import movesTo from "./movesTo";
import rotatesToPoint from "./rotatesToPoint";
import rotatesToVector from "./rotatesToVector";
import movesBy from "./movesBy";
import rotates from "./rotates";
import { MOVES, MOVES_TO, ROTATES_TO_POINT, ROTATES_TO_VECTOR, MOVES_BY, ROTATES, HAS_SPRITE, HAS_SPINE } from "../../components";

import { getByType } from "../../components"

// sub-systems corresponding to entity's components
const updaters = {
    [MOVES]: moves,
    [MOVES_TO]: movesTo,
    [ROTATES_TO_POINT]: rotatesToPoint,
    [ROTATES_TO_VECTOR]: rotatesToVector,
    [MOVES_BY]: movesBy,
    [ROTATES]: rotates
};

export default (prevEntity, timeDelta) => {
    let spriteComponent = prevEntity.get(HAS_SPRITE) || prevEntity.get(HAS_SPINE);
    if (!spriteComponent) {
        return prevEntity;
    }
    let nextEntity = new Map([
        ...prevEntity
    ]);
    [ ...prevEntity.keys() ].filter(componentId => updaters[componentId] !== undefined).forEach(componentId => {
        let component = prevEntity.get(componentId);
        [ component, spriteComponent ] = updaters[componentId](component, spriteComponent, timeDelta);
        if (component) {
            nextEntity.set(componentId, component);
        } else {
            nextEntity.delete(componentId);
        }
    });
    if (spriteComponent) {
        nextEntity.set(spriteComponent.id, spriteComponent);
    }
    return nextEntity;
}

