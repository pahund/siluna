/**
 * index.js
 *
 * Updater systems are responsible for executing updates on components that require an update on every cycle of the
 * game loop.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import moves from "./moves";
import movesTo from "./movesTo";
import rotates from "./rotates";

export default (state, entity) => {
    Object.keys(entity).forEach(componentId => {
        switch (componentId) {
            case "moves":
                moves(entity, state.config);
                break;
            case "rotates":
                rotates(entity);
                break;
            case "movesTo":
                movesTo(entity);
                break;
        }
    });
    return state;
}

