/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import { TAP_ON_SCREEN, MOVE_TO_POINT } from "../actions";
import moveToPoint from "../actions/moveToPoint";
import Action from "../actions/Action";
import Group from "../actions/Group";
import Sequence from "../actions/Sequence";
import interruptable from "./util/interruptable";
import { take, put, call } from "redux-saga";
import Point from "../math/Point";
import { EASE_IN_OUT_SINE } from "../math/easing";
import config from "../config";

function *tapOnScreen(action, getState) {
    const node = getState().triggers.tapOnScreen,
        currentTap = action.target;

    yield node.callables.map(callable => call(callable, { currentTap }));
    console.log("[PH_LOG] trigger tap on screen done"); // PH_TODO: REMOVE
}

export default function *(getState) {
    yield *interruptable(TAP_ON_SCREEN, tapOnScreen, getState);
}
