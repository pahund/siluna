/**
 * interruptable.js
 *
 * Creates a saga for a specific action type that is interrupted when the action is triggered again before the specified
 * payload function has been resolved.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import { take, call, race } from "redux-saga";

export default function *(actionType, func, getState) {
    function *execute(action) {
        const winner = yield race({
            interruption: take(actionType),
            payload: call(func, action, getState)
        });
        if (winner.interruption) {
            console.log("[PH_LOG] interrupted"); // PH_TODO: REMOVE
            yield execute(winner.interruption);
        }
    }
    while (true) {
        const action = yield take(actionType);
        yield execute(action);
    }
}


