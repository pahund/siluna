/**
 * entities.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jan 2016
 */
import { UPDATE, TINT, MOVE_TO_TAP } from "../actions";

import updater from "../systems/updater";
import tinter from "../systems/tinter";
import moverToTap from "../systems/moverToTap";

function getEntity(state, action) {
    return state[action.entity];
}

export default (state = {}, action = null) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                [action.entity]: updater(getEntity(state, action))
            };
        case MOVE_TO_TAP:
            return moverToTap(state, action.position, action.speed);
        case TINT:
            return {
                ...state,
                [action.entity]: tinter(getEntity(state, action))
            };
    }
    return state;
};
