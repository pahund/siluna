/**
 * boxes.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

var renderer = PIXI.autoDetectRenderer(1600, 900,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();
stage.interactive = true;

PIXI.loader
    .add('boxes', 'data/boxes.json')
    .load(onAssetsLoaded);

function onAssetsLoaded(loader, res) {

    boxes = new PIXI.spine.Spine(res.boxes.spineData);
    boxes.skeleton.setToSetupPose();
    boxes.update(0);
    boxes.autoUpdate = false;

    // create a container for the spine animation and add the animation to it
    var boxesCage = new PIXI.Container();
    boxesCage.addChild(boxes);

    // measure the spine animation and position it inside its container to align it to the origin
    var localRect = boxes.getLocalBounds();
    boxes.position.set(-localRect.x, -localRect.y);

    // now we can scale, position and rotate the container as any other display object
    var scale = Math.min((renderer.width * 0.4) / boxesCage.width, (renderer.height * 0.4) / boxesCage.height);
    boxesCage.scale.set(scale, scale);
    boxesCage.position.set((renderer.width - boxesCage.width) * 0.5, (renderer.height - boxesCage.height) * 0.5);

    // add the container to the stage
    stage.addChild(boxesCage);

    // once position and scaled, set the animation to play
    var animations = ["wag", "twist", "coil", "wag2"];
    var animationIndex = 0;

    function switchAnimation() {
        boxes.state.setAnimationByName(0, animations[animationIndex], true);
        animationIndex = animationIndex === animations.length - 1 ? 0 : animationIndex + 1;
    }

    stage.on('click', switchAnimation);

    animate();
    function animate() {
        requestAnimationFrame(animate);

        //boxes.update(0.01666666666667);
        boxes.update(0.005);

        // render the container
        renderer.render(stage);
    }
}



