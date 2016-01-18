/**
 * clearDispatches.js
 *
 * Used internally by the dispatcher: this action tells the triggers reducer that the dispatches currently in the
 * state should be removed, because they have been dispatched.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Jan 2016
 */
import { CLEAR_DISPATCHES } from ".";

export default () => ({
    type: CLEAR_DISPATCHES
});
