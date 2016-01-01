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
import spriteManager from "./lib/spriteManager";
import makeStore from "./lib/makeStore";
import { move, rotate, tint } from "./actions";
import reducers from "./reducers";

const config = makeConfig(),
    renderer = makeRenderer({ config }),
    stage = makeStage(),
    store = makeStore({ config, reducers });

resizeManager.init({ config, stage, renderer });
spriteManager.init({ store, stage });

const sinalta = spriteManager.get("sinalta");

store.dispatch(tint("sinalta"));
sinalta.interactive = true;
sinalta.click = () => store.dispatch(tint("sinalta"));
sinalta.touchstart = () => store.dispatch(tint("sinalta"));

(function animate() {
    requestAnimationFrame(animate);

    [ "siluna", "sirena", "sinalta"].forEach(entity => {
        store.dispatch(move(entity));
        store.dispatch(rotate(entity));
    });

    spriteManager.update();

    renderer.render(stage);
}());


