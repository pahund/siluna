/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import makeConfig from "./lib/makeConfig";
import makeRenderer from "./lib/makeRenderer";
import makeStage from "./lib/makeStage";
import resizeManager from "./lib/resizeManager";
import makeStore from "./lib/makeStore";
import { move, rotate, tint } from "./actions";
import reducers from "./reducers";
import positioner from "./systems/positioner";
import tinter from "./systems/tinter";
import rotater from "./systems/rotater";

const config = makeConfig(),
    renderer = makeRenderer({ config }),
    stage = makeStage(),
    store = makeStore({ config, reducers });

resizeManager.init({ config, stage, renderer });

const texture = {
    siluna: PIXI.Texture.fromImage("images/siluna.png"),
    sirena: PIXI.Texture.fromImage("images/sirena.png"),
    sinalta: PIXI.Texture.fromImage("images/sirena.png")
};

const sprites = {
    siluna: new PIXI.Sprite(texture.siluna),
    sirena: new PIXI.Sprite(texture.sirena),
    sinalta: new PIXI.Sprite(texture.sinalta)
};

[ "siluna", "sirena", "sinalta"].forEach(entity => {
    const sprite = sprites[entity];
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.1;
    stage.addChild(sprite);
});

store.dispatch(tint("sinalta"));
sprites.sinalta.interactive = true;
sprites.sinalta.click = () => store.dispatch(tint("sinalta"));
sprites.sinalta.touchstart = () => store.dispatch(tint("sinalta"));

store.subscribe(() => {
    const state = store.getState();
    [ "siluna", "sirena", "sinalta"].forEach(entity => {
        positioner(state.entity[entity], sprites[entity]);
        rotater(state.entity[entity], sprites[entity]);
        tinter(state.entity[entity], sprites[entity]);
    });
});

(function animate() {
    requestAnimationFrame(animate);

    [ "siluna", "sirena", "sinalta"].forEach(entity => {
        store.dispatch(move(entity));
        store.dispatch(rotate(entity));
    });

    renderer.render(stage);
}());


