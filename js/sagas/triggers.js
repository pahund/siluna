/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import {
    TAP_ON_SCREEN,
    TOUCH_START_ON_SCREEN,
    TOUCH_MOVE_ON_SCREEN,
    TOUCH_END_ON_SCREEN
} from "../actions";
import interruptable from "./util/interruptable";
import { call, fork, SagaCancellationException } from "redux-saga";

function makeUserInteractionSaga(type) {
    return function *(action, getState) {
        const node = getState().triggers[type],
            currentTap = action.target;

        try {
            yield node.callables.map(callable => call(callable, { currentTap }));
        } catch (e) {
            /* saga cancellation exceptions are expected and OK */
            if (!(e instanceof SagaCancellationException)) {
                throw e;
            }
        }
    };
}

export default function *(getState) {
    yield fork(interruptable, TAP_ON_SCREEN, makeUserInteractionSaga(TAP_ON_SCREEN), getState);
    yield fork(interruptable, TOUCH_START_ON_SCREEN, makeUserInteractionSaga(TOUCH_START_ON_SCREEN), getState);
    yield fork(interruptable, TOUCH_MOVE_ON_SCREEN, makeUserInteractionSaga(TOUCH_MOVE_ON_SCREEN), getState);
    yield fork(interruptable, TOUCH_END_ON_SCREEN, makeUserInteractionSaga(TOUCH_END_ON_SCREEN), getState);
}
