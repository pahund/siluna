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
    speed: {
        movement: 2000, // 2000 pixels per second
        rotation: 360 // 360 degrees per second
    },
    margin: 250,
    gameDimensions: {
        w: 2880,
        h: 1800
    },
    assets: {
        path: "./data/",
        bundles: [
            "siluna"
        ]
    },
    maxTimeDelta: 100
});
