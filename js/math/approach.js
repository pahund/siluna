/**
 * approach.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Feb 2016
 */
export default (goal, current, delta) => {
    const difference = goal - current;
    if (difference > delta) {
        return current + delta;
    }
    if (difference < -delta) {
        return current - delta;
    }
    return goal;
};

