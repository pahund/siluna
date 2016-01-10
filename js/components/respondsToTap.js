/**
 * respondsToTap.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default (actionType, ...args) => deepFreeze({
    id: "respondsToTap",
    actionType,
    args
});
