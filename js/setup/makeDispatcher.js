/**
 * makeDispatcher.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import update from "../actions/update";
import clearDispatches from "../actions/clearDispatches";
import resumeSequence from "../actions/resumeSequence";

export default ({ store }) => {
    return function (timeDelta) {
        const state = store.getState();
        state.triggers.dispatches.forEach(action => store.dispatch(action));
        store.dispatch(clearDispatches());
        Object.keys(state.entities).forEach(entity => store.dispatch(update(entity, timeDelta)));
        if (state.triggers.sequenceIds.length > 0) {
            store.dispatch(resumeSequence(state.triggers.sequenceIds));
        }
    };
}
