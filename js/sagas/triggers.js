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

function *execute(node, options) {
    if (node instanceof Action) {
        return yield call(node.callable, options);
    }

    if (node instanceof Group) {
        let callables = [];
        for (let child of node) {
            callables = callables.concat(collect(child));
        }
        const calls = callables.map(callable => call(callable, options));
        return yield calls;
    }

    if (node instanceof Sequence) {
        const promises = [];
        for (let child of node) {
            promises.push(yield execute(child, options));
        }
        return Promise.all(promises);
    }

    throw new TypeError("Trigger components need to be actions, groups or sequences");
}

function *collect2(node) {
    if (node instanceof Action) {
    }

    if (node instanceof Group) {
    }

    if (node instanceof Sequence) {
    }
}

function collect(node) {
    if (node instanceof Action) {
        return [ node.callable ];
    }
    if (node instanceof Group) {
        let callables = [];
        for (let child of node) {
            callables = callables.concat(collect(child));
        }
        return callables;
    }

    if (node instanceof Sequence) {
        // TODO: currently behaves same as Group
        let callables = [];
        for (let child of node) {
            callables = callables.concat(collect(child));
        }
        return callables;
    }
    //if (node instanceof Group) {
    //    let puts = [],
    //        promise = null;
    //    for (let child of node) {
    //        let [ newPuts, newPromise ] = yield collect(child, currentTap);
    //        promise = promise ? promise.then(newPromise) : newPromise;
    //        puts = puts.concat(newPuts);
    //    }
    //    yield puts;
    //    return [[], promise ];
    //}
    //if (node instanceof Sequence) {
    //    let promise = null;
    //    for (let child of node) {
    //        let [ puts, newPromise ] = yield collect(child, currentTap);
    //        promise = promise ? promise.then(newPromise) : newPromise;
    //        yield puts;
    //    }
    //    return [[], promise ];
    //}
    throw new TypeError("Trigger components need to be actions, groups or sequences", node);
}

function *tapOnScreen(action, getState) {
    const node = getState().triggers.tapOnScreen,
        currentTap = action.target;

    yield execute(node, { currentTap });

    //const [ dispatchable, promise ] = collect(node, currentTap);
    //yield put(dispatchable);
    //yield promise;

    //const callables = collect(node);
    //
    //const calls = callables.map(callable => call(callable, { currentTap }));
    //yield calls;

    //for (let callable of callables) {
    //    yield call(callable, { currentTap });
    //}







    //const moveToPoint = new Action(MOVE_TO_POINT, "siluna", currentTap, config.speed.movement, EASE_IN_OUT_SINE);
    //yield put(moveToPoint.toDispatchable());
    //yield moveToPoint.promise;

    //const moveToPoint = new Action(MOVE_TO_POINT, "siluna", currentTap, config.speed.movement, EASE_IN_OUT_SINE);
    //yield call(moveToPoint.callable, { currentTap });

    //yield call(function *() {
    //    yield put(moveToPoint.toDispatchable({ currentTap }));
    //    return moveToPoint.promise;
    //});
    console.log("[PH_LOG] done!!11!!"); // PH_TODO: REMOVE
}

function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function *wrapMoveToPoint(entity, position, speed, easing) {
    let resolve = null;
    const promise = new Promise(res => resolve = () => res("done")),
        moveAction = moveToPoint(entity, position, speed, easing, resolve);
    yield put(moveAction);
    return promise;
}

export default function *(getState) {
    //while (true) {
    //    const tapAction = yield take(TAP_ON_SCREEN);
    //    yield call(() => wrapMoveToPoint("siluna", tapAction.target, 1000, EASE_IN_OUT_SINE));
    //    console.log("PHUGG!1!");
    //}
    yield *interruptable(TAP_ON_SCREEN, tapOnScreen, getState);
}
