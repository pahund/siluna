/**
 * configManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */

let config = null;

function init() {
    if (config) {
        throw new Error("config is already initialized");
    }

    const gameDimensions = {
        w: 2880,
        h: 1800
    };

    config = {
        gameDimensions
    };
}

function get() {
    if (!config) {
        throw new Error("config has not been initialized");
    }
    return config;
}

export default {
    init,
    get
};

