/**
 * Sequence.js
 *
 * A sequence of actions, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */

import makePromise from "./makePromise";
import { call, SagaCancellationException } from "redux-saga";

class Sequence {
    constructor(...actions) {
        this.actions = actions;
    }

    *[Symbol.iterator]() {
        for (const action of this.actions) {
            yield action;
        }
    }

    get callables() {
        const that = this;
        return [ function *(config) {
            let [ promise, resolve ] = makePromise();
            for (let child of that) {
                let p;
                try {
                    p = yield child.callables.map(callable => call(callable, config));
                } catch (e) {
                    /* saga cancellation exceptions are expected and OK */
                    if (!(e instanceof SagaCancellationException)) {
                        throw e;
                    }
                }
                promise = promise.then(p);
            }
            resolve();
            return promise;
        } ];
    }
}

export default Sequence;
