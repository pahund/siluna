/**
 * makeStage.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
import PIXI from "pixi";

export default () => {
    const stage = new PIXI.Container();
    stage.interactive = true;
    return stage;
};


