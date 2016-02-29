/**
 * config.js
 *
 * Immutable object containing basic configuration for the whole application.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */

export default {
    debug: {
        displayFrameRate: window.displayFrameRate || false
    },
    speed: {
        movement: 1000, // pixels per second
        rotation: 360, // degrees per second
        lerp: 3 // 1: sluggish ... 10: responsive
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
    maxTimeDelta: 100,
    touchDelay: {
        start: 100,
        move: 300
    }
};
