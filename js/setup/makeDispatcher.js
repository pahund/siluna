/**
 * makeDispatcher.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import update from "../actions/update";

export default ({ store }) => {
    return function (timeDelta) {
        const state = store.getState();
        state.triggers.dispatches.forEach(action => store.dispatch(action));
        Object.keys(state.entities).forEach(entity => store.dispatch(update(entity, timeDelta)));
    };
}
