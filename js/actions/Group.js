/**
 * Group.js
 *
 * A group of actions, used by triggers to compose complex actions.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */

class Group {
    constructor(...actions) {
        this.actions = actions;
    }

    *[Symbol.iterator]() {
        for (const action of this.actions) {
            yield action;
        }
    }

    get callables() {
        let callables = [];
        for (let child of this) {
            callables = callables.concat(child.callables);
        }
        return callables;
    }
}

export default Group;
