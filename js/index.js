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

const siluna = new PIXI.Sprite(texture.siluna),
    sirena = new PIXI.Sprite(texture.sirena),
    sinalta = new PIXI.Sprite(texture.sinalta);

siluna.anchor.x = 0.5;
siluna.anchor.y = 0.1;
sirena.anchor.x = 0.5;
sirena.anchor.y = 0.1;
sinalta.anchor.x = 0.5;
sinalta.anchor.y = 0.1;
store.dispatch(tint("sinalta"));

stage.addChild(siluna);
stage.addChild(sirena);
stage.addChild(sinalta);

sinalta.interactive = true;
sinalta.click = () => store.dispatch(tint("sinalta"));
sinalta.touchstart = () => store.dispatch(tint("sinalta"));

store.subscribe(() => {
    const state = store.getState();
    siluna.position = state.entity.siluna.position;
    siluna.rotation = state.entity.siluna.rotation;
    siluna.tint = state.entity.siluna.tint;
    sirena.position = state.entity.sirena.position;
    sirena.rotation = state.entity.sirena.rotation;
    sirena.tint = state.entity.sirena.tint;
    sinalta.position = state.entity.sinalta.position;
    sinalta.rotation = state.entity.sinalta.rotation;
    sinalta.tint = state.entity.sinalta.tint;
});

(function animate() {
    requestAnimationFrame(animate);

    store.dispatch(move("siluna"));
    store.dispatch(move("sirena"));
    store.dispatch(move("sinalta"));
    store.dispatch(rotate("siluna"));
    store.dispatch(rotate("sirena"));
    store.dispatch(rotate("sinalta"));

    renderer.render(stage);
}());


