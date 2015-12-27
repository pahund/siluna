/**
 * dragon.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

var renderer = PIXI.autoDetectRenderer(1600, 900,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

PIXI.loader
    .add('dragon', 'data/dragon.json')
    .load(onAssetsLoaded);

function onAssetsLoaded(loader, res) {

    dragon = new PIXI.spine.Spine(res.dragon.spineData);
    dragon.skeleton.setToSetupPose();
    dragon.update(0);
    dragon.autoUpdate = false;

    // create a container for the spine animation and add the animation to it
    var dragonCage = new PIXI.Container();
    dragonCage.addChild(dragon);

    // measure the spine animation and position it inside its container to align it to the origin
    var localRect = dragon.getLocalBounds();
    dragon.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    var scale = Math.min((renderer.width * 0.7) / dragonCage.width, (renderer.height * 0.7) / dragonCage.height);
    dragonCage.scale.set(scale, scale);
    dragonCage.position.set((renderer.width - dragonCage.width) * 0.5, (renderer.height - dragonCage.height) * 0.5);

    // add the container to the stage
    stage.addChild(dragonCage);

    // once position and scaled, set the animation to play
    dragon.state.setAnimationByName(0, 'flying', true);

    animate();
    function animate() {
        requestAnimationFrame(animate);

        dragon.update(0.01666666666667);

        // render the container
        renderer.render(stage);
    }
}



