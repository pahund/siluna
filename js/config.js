/**
 * config.js
 *
 * Immutable object containing basic configuration for the whole application.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */

import deepFreeze from "deep-freeze";

export default deepFreeze({
    gameDimensions: {
        w: 2880,
        h: 1800
    }
});
