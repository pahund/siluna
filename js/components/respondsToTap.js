/**
 * respondsToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */
import deepFreeze from "deep-freeze";
import { RESPONDS_TO_TAP } from ".";

export default (actionType, ...args) => deepFreeze({
    id: RESPONDS_TO_TAP,
    actionType,
    args
});
