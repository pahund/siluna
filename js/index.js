/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import config from "./config";
import makeRenderer from "./setup/makeRenderer";
import makeStage from "./setup/makeStage";
import makeStore from "./setup/makeStore";
import resizeManager from "./game/resizeManager";
import spriteManager from "./game/spriteManager";
import update from "./actions/update";
import reducers from "./reducers";

const renderer = makeRenderer(),
    stage = makeStage(),
    store = makeStore();

resizeManager.init({ config, stage, renderer });
spriteManager.init({ store, stage });

(function animate() {
    requestAnimationFrame(animate);

    const state = store.getState();
    Object.keys(state.entities).forEach(entity => store.dispatch(update(entity)));

    spriteManager.update();

    renderer.render(stage);
}());


