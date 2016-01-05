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
import rotates from "./rotates";
import deepFreeze from "deep-freeze";

// sub-systems corresponding to entity's components
const updaters = {
    moves,
    movesTo,
    rotates
};

export default prevEntity => {
    let spriteComponent = prevEntity.hasSprite;
    if (!spriteComponent) {
        return prevEntity;
    }
    let nextEntity = {};
    Object.keys(prevEntity).filter(componentId => updaters[componentId] !== undefined).forEach(componentId => {
        let component = prevEntity[componentId];
        [ component, spriteComponent ] = updaters[componentId](component, spriteComponent);
        if (component) {
            nextEntity[componentId] = component;
        }
    });
    if (spriteComponent) {
        nextEntity.hasSprite = spriteComponent;
    }
    return deepFreeze(nextEntity);
}

