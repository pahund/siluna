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
import rotatesTo from "./rotatesTo";
import movesBy from "./movesBy";
import rotates from "./rotates";
import deepFreeze from "deep-freeze";

// sub-systems corresponding to entity's components
const updaters = {
    moves,
    movesTo,
    rotatesTo,
    movesBy,
    rotates
};

export default (prevEntity, timeDelta) => {
    let spriteComponent = prevEntity.hasSprite || prevEntity.hasSpine,
        sequenceIds = [];
    if (!spriteComponent) {
        return prevEntity;
    }
    let nextEntity = {
        ...prevEntity
    };
    Object.keys(prevEntity).filter(componentId => updaters[componentId] !== undefined).forEach(componentId => {
        let component = prevEntity[componentId],
            sids;
        [ component, spriteComponent, sids ] = updaters[componentId](component, spriteComponent, timeDelta);
        if (component) {
            nextEntity[componentId] = component;
        } else {
            delete nextEntity[componentId];
        }
        if (sids) {
            sequenceIds = sequenceIds.concat(sids);
        }
    });
    if (spriteComponent) {
        nextEntity[spriteComponent.id] = spriteComponent;
    }
    return [ deepFreeze(nextEntity), sequenceIds ];
}

