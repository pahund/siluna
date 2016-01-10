/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Dec 2015
 */

import makeRenderer from "./setup/makeRenderer";
import makeStage from "./setup/makeStage";
import makeStore from "./setup/makeStore";
import makeLoader from "./setup/makeLoader";
import makeTimer from "./setup/makeTimer";
import resizeManager from "./view/resizeManager";
import spriteManager from "./view/spriteManager";
import update from "./actions/update";
import reducers from "./reducers";

const loader = makeLoader(),
    renderer = makeRenderer(),
    store = makeStore(),
    stage = makeStage({ store });

let timer;

resizeManager.init({ stage, renderer });

loader.load((l, resources) => {
    spriteManager.init({ store, stage, resources });
    timer = makeTimer();
    animate();
});

function animate() {
    requestAnimationFrame(animate);

    const state = store.getState();
    Object.keys(state.entities).forEach(entity => store.dispatch(update(entity)));

    spriteManager.update(timer());

    renderer.render(stage);
}


