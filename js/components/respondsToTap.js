/**
 * respondsToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */
import { RESPONDS_TO_TAP } from ".";

export default (actionType, ...args) => ({
    id: RESPONDS_TO_TAP,
    actionType,
    args
});
