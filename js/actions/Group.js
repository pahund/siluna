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

    [Symbol.iterator]() {
        const actions = this.actions;
        let index = 0;
        return {
            next() {
                return {
                    value: actions[index++],
                    done: index > actions.length
                };
            }
        };
    }
}

export default Group;
