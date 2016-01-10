/**
 * makeStage.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
import PIXI from "pixi";
import moveToTap from "../actions/moveToTap";
import config from "../config";
import Point from "../math/Point";

export default ({ store } = { store: null }) => {
    const stage = new PIXI.Container();
    stage.interactive = true;
    stage.hitArea = new PIXI.Rectangle(0, 0, config.gameDimensions.w, config.gameDimensions.w);
    if (store) {
        const onTap = ({ data }) => store.dispatch(moveToTap(Point.fromPixiPoint(data.getLocalPosition(stage)), config.speed));
        stage.touchstart = onTap;
        stage.click = onTap;
    }
    return stage;
};


