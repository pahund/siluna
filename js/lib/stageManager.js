/**
 * stageManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */

let stage = null;

function init() {
    if (stage) {
        throw new Error("stage is already initialized");
    }
    stage = new PIXI.Container();
    stage.interactive = true;
    return stage;
}

function get() {
    if (!stage) {
        throw new Error("stage has not been initialized");
    }
    return stage;
}

export default {
    init,
    get
};
