/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import { TAP_ON_SCREEN, MOVE_TO_POINT } from "../actions";
import Action from "../actions/Action";
import Group from "../actions/Group";
import Sequence from "../actions/Sequence";
import interruptable from "./util/interruptable";
import { put } from "redux-saga";
import Point from "../math/Point";
import { EASE_IN_OUT_SINE } from "../math/easing";
import config from "../config";

function *collect(node, currentTap) {
    if (node instanceof Action) {
        const dispatchable = node.toDispatchable({ currentTap });
        //yield put(dispatchable);
        return [[ put(dispatchable) ], node.promise ];
        //return [[ node.toDispatchable({ currentTap }) ], node.promise ];
    }
    if (node instanceof Group) {
        let puts = [],
            promise = null;
        for (let child of node) {
            let [ newPuts, newPromise ] = yield collect(child, currentTap);
            promise = promise ? promise.then(newPromise) : newPromise;
            puts = puts.concat(newPuts);
        }
        yield puts;
        return [[], promise ];
    }
    if (node instanceof Sequence) {
        console.error("[PH_LOG] sequence not implemented yet"); // PH_TODO: REMOVE
        return;
    }
    throw new TypeError("Trigger components need to be actions, groups or sequences, I got this:", node);
}

function *startCollecting(node, currentTap) {
    const [ puts, promise ] = yield collect(node, currentTap);
    yield puts;
    return promise;
}

function *tapOnScreen(action, getState) {
    const node = getState().triggers.tapOnScreen,
        currentTap = action.target;

    const [ puts, promise ] = yield collect(node, currentTap);
    yield puts;
    //yield startCollecting(node, currentTap);



    //const moveToPoint = new Action(MOVE_TO_POINT, "siluna", target, config.speed.movement, EASE_IN_OUT_SINE);
    //yield put(moveToPoint.toDispatchable());
    //return moveToPoint.promise;
}

export default function *(getState) {
    yield *interruptable(TAP_ON_SCREEN, tapOnScreen, getState);
}
