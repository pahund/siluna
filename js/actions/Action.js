/**
 * Action.js
 *
 * Wrapper for an action, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { CURRENT_TAP, CURRENT_ENTITY, getByType } from ".";

class Action {
    constructor(type, ...args) {
        this.type = type;
        this.args = args;
        [ this.promise, this.resolve ] = makePromise();
    }

    toDispatchable({ currentTap, currentEntity } = {}) {
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
        return getByType(this.type)(...args, this.resolve);
    }
}

function makePromise() {
    let resolve = null;
    const promise = new Promise(res => {
        resolve = () => {
            console.log("[PH_LOG] resolving promise"); // PH_TODO: REMOVE
            res("done");
        }
    });
    return [ promise, resolve ];
}

export default Action;
