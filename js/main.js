/**
 * main.js
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
    //stage.addChild(dragonCage);

    // once position and scaled, set the animation to play
    dragon.state.setAnimationByName(0, 'flying', true);


    var texture = {
        siluna: PIXI.Texture.fromImage('images/siluna.png'),
        sirena: PIXI.Texture.fromImage('images/sirena.png'),
        sinalta: PIXI.Texture.fromImage('images/sirena.png')
    };

    var siluna = new PIXI.Sprite(texture.siluna);
    var sirena = new PIXI.Sprite(texture.sirena);
    var sinalta = new PIXI.Sprite(texture.sinalta);

    var increment = {
        siluna: {
            x: 6,
            y: 9
        },
        sirena: {
            x: 10,
            y: 10
        },
        sinalta: {
            x: 12,
            y: 6
        }
    };

    siluna.anchor.x = 0.5;
    siluna.anchor.y = 0.1;
    sirena.anchor.x = 0.5;
    sirena.anchor.y = 0.1;
    sinalta.anchor.x = 0.5;
    sinalta.anchor.y = 0.1;
    sinalta.tint = Math.random() * 0xFFFFFF;

    siluna.position.x = 0;
    siluna.position.y = 450;
    sirena.position.x = 0;
    sirena.position.y = 450;
    sinalta.position.x = 0;
    sinalta.position.y = 450;

    stage.addChild(siluna);
    stage.addChild(sirena);
    stage.addChild(sinalta);

    animate();
    function animate() {
        requestAnimationFrame(animate);

        siluna.rotation += 0.05;
        siluna.position.x += increment.siluna.x;
        siluna.position.y += increment.siluna.y;

        sirena.rotation += 0.05;
        sirena.position.x += increment.sirena.x;
        sirena.position.y += increment.sirena.y;

        sinalta.rotation += 0.05;
        sinalta.position.x += increment.sinalta.x;
        sinalta.position.y += increment.sinalta.y;

        if (siluna.position.x > 1600 || siluna.position.x < 0) {
            increment.siluna.x = increment.siluna.x * -1;
        }
        if (siluna.position.y > 900 || siluna.position.y < 0) {
            increment.siluna.y = increment.siluna.y * -1;
        }
        if (sirena.position.x > 1600 || sirena.position.x < 0) {
            increment.sirena.x = increment.sirena.x * -1;
        }
        if (sirena.position.y > 900 || sirena.position.y < 0) {
            increment.sirena.y = increment.sirena.y * -1;
        }
        if (sinalta.position.x > 1600 || sinalta.position.x < 0) {
            increment.sinalta.x = increment.sinalta.x * -1;
        }
        if (sinalta.position.y > 900 || sinalta.position.y < 0) {
            increment.sinalta.y = increment.sinalta.y * -1;
        }

        //dragon.update(0.01666666666667);

        // render the container
        renderer.render(stage);
    }
}



