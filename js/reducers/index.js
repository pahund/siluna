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
    const entity = state.entity[action.entity];
    switch (action.type) {
        case UPDATE:
            return updater(state, entity);
        case TINT:
            return tinter(state, entity);
    }
    return state;
};
