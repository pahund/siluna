/**
 * siluna.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import configManager from "./lib/configManager";
import rendererManager from "./lib/rendererManager";
import stageManager from "./lib/stageManager";
import resizeManager from "./lib/resizeManager";

configManager.init();
rendererManager.init();
stageManager.init();
resizeManager.init();

const config = configManager.get(),
    renderer = rendererManager.get(),
    stage = stageManager.get(),
    loader = new PIXI.loaders.Loader();

loader.add("siluna", "./data/siluna.json").load(onAssetsLoaded);

function onAssetsLoaded(loader, res) {

    const siluna = new PIXI.spine.Spine(res.siluna.spineData);
    siluna.skeleton.setToSetupPose();
    siluna.update(0);
    siluna.autoUpdate = false;

    // create a container for the spine animation and add the animation to it
    const silunaCage = new PIXI.Container();
    silunaCage.addChild(siluna);

    // measure the spine animation and position it inside its container to align it to the origin
    const localRect = siluna.getLocalBounds();
    siluna.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    const scale = Math.min((config.gameDimensions.w * 0.8) / silunaCage.width, (config.gameDimensions.h * 0.8) / silunaCage.height);
    silunaCage.scale.set(scale, scale);
    silunaCage.position.set((renderer.width - silunaCage.width) * 0.5, (renderer.height - silunaCage.height) * 0.5);

    // add the container to the stage
    stage.addChild(silunaCage);

    // once position and scaled, set the animation to play
    siluna.state.setAnimationByName(0, 'tail_wagging', true);

    (function animate() {
        requestAnimationFrame(animate);

        siluna.update(0.01666666666667);

        // render the container
        renderer.render(stage);
    }());
}



