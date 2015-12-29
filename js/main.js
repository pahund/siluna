/**
 * main.js
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
    stage = stageManager.get();

const texture = {
    siluna: PIXI.Texture.fromImage("images/siluna.png"),
    sirena: PIXI.Texture.fromImage("images/sirena.png"),
    sinalta: PIXI.Texture.fromImage("images/sirena.png")
};

const siluna = new PIXI.Sprite(texture.siluna),
    sirena = new PIXI.Sprite(texture.sirena),
    sinalta = new PIXI.Sprite(texture.sinalta);

const increment = {
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

(function animate() {
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

    if (siluna.position.x > config.gameDimensions.w || siluna.position.x < 0) {
        increment.siluna.x = increment.siluna.x * -1;
    }
    if (siluna.position.y > config.gameDimensions.h || siluna.position.y < 0) {
        increment.siluna.y = increment.siluna.y * -1;
    }
    if (sirena.position.x > config.gameDimensions.w || sirena.position.x < 0) {
        increment.sirena.x = increment.sirena.x * -1;
    }
    if (sirena.position.y > config.gameDimensions.h || sirena.position.y < 0) {
        increment.sirena.y = increment.sirena.y * -1;
    }
    if (sinalta.position.x > config.gameDimensions.w || sinalta.position.x < 0) {
        increment.sinalta.x = increment.sinalta.x * -1;
    }
    if (sinalta.position.y > config.gameDimensions.h || sinalta.position.y < 0) {
        increment.sinalta.y = increment.sinalta.y * -1;
    }

    renderer.render(stage);
}());



