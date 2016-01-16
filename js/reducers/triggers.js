/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { TAP_ON_SCREEN, getByType, CURRENT_TAP } from "../actions";

export default (state = {}, action = null) => {
    const dispatches = [];
    switch (action.type) {
        case TAP_ON_SCREEN:
            state.tapOnScreen.forEach(actionData => {
                let [ name, ...args ] = actionData;
                args = args.map(arg => arg === CURRENT_TAP ? action.target : arg);
                dispatches.push(getByType(name)(...args));
            });
            break;
    }
    return {
        ...state,
        dispatches
    };
};
