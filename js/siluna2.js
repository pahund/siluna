/**
 * siluna.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import PIXI from "pixi";
import config from "./config";
import makeRenderer from "./setup/makeRenderer";
import makeStage from "./setup/makeStage";
import resizeManager from "./view/resizeManager";

const renderer = makeRenderer(),
    stage = makeStage(),
    loader = new PIXI.loaders.Loader();

resizeManager.init({ stage, renderer });

loader.add("siluna", "./data/siluna.json").load(onAssetsLoaded);

function onAssetsLoaded(l, res) {

    const siluna = new PIXI.spine.Spine(res.siluna.spineData);
    siluna.update(0);
    siluna.autoUpdate = false;

    siluna.position.set(config.gameDimensions.w * 0.5, config.gameDimensions.h * 0.3);

    const scale = Math.min(config.gameDimensions.w * 0.8 / siluna.width, config.gameDimensions.h * 0.8 / siluna.height);
    siluna.scale.set(scale, scale);

    stage.addChild(siluna);

    // once position and scaled, set the animation to play
    siluna.state.setAnimationByName(0, "treading-water", true);

    (function animate() {
        requestAnimationFrame(animate);

        siluna.update(0.01666666666667);

        // render the container
        renderer.render(stage);
    }());
}



