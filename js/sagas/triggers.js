/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import { TAP_ON_SCREEN } from "../actions";
import interruptable from "./util/interruptable";
import { call } from "redux-saga";

function *tapOnScreen(action, getState) {
    const node = getState().triggers.tapOnScreen,
        currentTap = action.target;

    yield node.callables.map(callable => call(callable, { currentTap }));
    console.log("[PH_LOG] trigger tap on screen done"); // PH_TODO: REMOVE
}

export default function *(getState) {
    yield *interruptable(TAP_ON_SCREEN, tapOnScreen, getState);
}
