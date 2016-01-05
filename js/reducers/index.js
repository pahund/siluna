/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { UPDATE, TINT } from "../actions";

import updater from "../systems/updater";
import tinter from "../systems/tinter";

export default (state, action = null) => {
    if (!action.entity) {
        return state;
    }
    let entity = state.entities[action.entity];
    switch (action.type) {
        case UPDATE:
            entity = updater(entity);
            break;
        case TINT:
            entity = tinter(entity);
            break;
    }
    const retVal = {
        ...state,
        entities: {
            ...state.entities,
            [action.entity]: entity
        }
    };
    return retVal;
};
