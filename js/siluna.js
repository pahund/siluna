/**
 * siluna.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

var renderer = PIXI.autoDetectRenderer(1600, 900,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

PIXI.loader
    .add('siluna', 'data/siluna.json')
    .load(onAssetsLoaded);

function onAssetsLoaded(loader, res) {

    siluna = new PIXI.spine.Spine(res.siluna.spineData);
    siluna.skeleton.setToSetupPose();
    siluna.update(0);
    siluna.autoUpdate = false;

    // create a container for the spine animation and add the animation to it
    var silunaCage = new PIXI.Container();
    silunaCage.addChild(siluna);

    // measure the spine animation and position it inside its container to align it to the origin
    var localRect = siluna.getLocalBounds();
    siluna.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    var scale = Math.min((renderer.width * 0.4) / silunaCage.width, (renderer.height * 0.4) / silunaCage.height);
    silunaCage.scale.set(scale, scale);
    silunaCage.position.set((renderer.width - silunaCage.width) * 0.5, (renderer.height - silunaCage.height) * 0.5);

    // add the container to the stage
    stage.addChild(silunaCage);

    // once position and scaled, set the animation to play
    siluna.state.setAnimationByName(0, 'tail_wagging', true);

    animate();
    function animate() {
        requestAnimationFrame(animate);

        siluna.update(0.01666666666667);

        // render the container
        renderer.render(stage);
    }
}



