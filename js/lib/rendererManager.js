/**
 * rendererManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */

import configManager from "./configManager";

let renderer = null;

function init() {
    const config = configManager.get();
    if (renderer) {
        throw new Error("renderer is already initialized");
    }
    renderer = PIXI.autoDetectRenderer(config.gameDimensions.w, config.gameDimensions.h, {
        backgroundColor : 0x1099bb,
        resolution: window.devicePixelRatio,
        autoResize: true
    });

    renderer.view.style.position = "absolute";
    document.body.appendChild(renderer.view);
}

function get() {
    if (!renderer) {
        throw new Error("renderer has not been initialized");
    }
    return renderer;
}

export default {
    init,
    get
};
