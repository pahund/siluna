/**
 * Sequence.js
 *
 * A sequence of actions, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */

import Promise from "bluebird";

class Sequence {
    constructor(...actions) {
        this.actions = actions;
    }

    *[Symbol.iterator]() {
        for (const action of this.actions) {
            yield action;
        }
    }

    add(action) {
        this.actions.push(action);
    }

    execute(config) {
        return Promise.reduce(this.actions, (seq, curr) => curr.execute(config), this.actions[0]);
    }
}

export default Sequence;
