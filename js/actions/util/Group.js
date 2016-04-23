/**
 * Group.js
 *
 * A group of actions, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */

import Promise from "bluebird";

class Group {
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
        return Promise.all(this.actions.map(curr => curr.execute(config)));
    }
}

export default Group;
