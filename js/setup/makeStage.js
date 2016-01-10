/**
 * makeStage.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
import PIXI from "pixi";
import moveToTap from "../actions/moveToTap";
import config from "../config";

export default ({ store }) => {
    const stage = new PIXI.Container(),
        onTap = ({ data }) => store.dispatch(moveToTap(data.getLocalPosition(stage), config.speed));
    stage.hitArea = new PIXI.Rectangle(0, 0, config.gameDimensions.w, config.gameDimensions.w);
    stage.interactive = true;
    stage.touchstart = onTap;
    stage.click = onTap;
    return stage;
};


