/**
 * entities.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import { UPDATE, TINT } from "../actions";

import updater from "../systems/updater";
import tinter from "../systems/tinter";

export default (state = {}, action = null) => {
    if (!action.entity) {
        return state;
    }
    let entity = state[action.entity];
    switch (action.type) {
        case UPDATE:
            entity = updater(entity);
            break;
        case TINT:
            entity = tinter(entity);
            break;
    }
    return {
        ...state,
        [action.entity]: entity
    };
};
