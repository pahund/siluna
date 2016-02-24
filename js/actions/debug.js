/**
 * debug.js
 *
 * A special action that simply transports log messages.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import { DEBUG } from ".";

export default (...args) => ({
    type: DEBUG,
    args
});
