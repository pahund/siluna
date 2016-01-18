/**
 * Sequence.js
 *
 * A sequence of actions, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */

import Action from "./Action";

class Sequence {
    constructor(...actions) {
        this.actions = actions;
    }

    [Symbol.iterator]() {
        const actions = this.actions;
        let index = 0;
        return {
            next() {
                return {
                    value: actions[index++],
                    done: index > actions.length
                };
            },
            nextIsType(type) {
                return actions[index].type === type;
            },
            peek() {
                return {
                    value: actions[index],
                    done: index + 1 > actions.length
                }
            }
        };
    }

    get iterator() {
        return this[Symbol.iterator]();
    }
}

export default Sequence;
