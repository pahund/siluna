/**
 * Action.js
 *
 * Wrapper for an action, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { CURRENT_TAP, CURRENT_ENTITY, getByType } from "..";
import { put } from "redux-saga/effects";
import makePromise from "./makePromise";

class Action {
    constructor(type, ...args) {
        this.dispatch = () => {
            throw new Error(`dispatch method has not been set on action of type ${type}, ` +
                    `args ${args} – did you fire the “init” action?`);
        };
        this.type = type;
        this.args = args;
    }

    toDispatchable(resolve, { currentTap, currentEntity } = {}) {
        const args = this.args.map(arg => {
            if (arg === CURRENT_ENTITY) {
                if (!currentEntity) {
                    throw new ReferenceError(`To dispatch an action of type “${this.type}”, you need to specify the current entity's name`);
                }
                return currentEntity;
            }
            if (arg === CURRENT_TAP) {
                if (!currentTap) {
                    throw new ReferenceError(`To dispatch an action of type “${this.type}”, you need to specify the current tap position`);
                }
                return currentTap;
            }
            return arg;
        });
        return getByType(this.type)(...args, resolve);
    }

    execute(config) {
        const [ promise, resolve ] = makePromise(this.type, this.args);
        this.dispatch(this.toDispatchable(resolve, config));
        return promise;
    }
}

export default Action;
