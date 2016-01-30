/**
 * EventManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 30 Jan 2016
 */
import tapOnScreen from "../actions/tapOnScreen";
import touchStartOnScreen from "../actions/touchStartOnScreen";
import touchMoveOnScreen from "../actions/touchMoveOnScreen";
import touchEndOnScreen from "../actions/touchEndOnScreen";
import Point from "../math/Point";
import config from "../config";

export default class EventManager {
    constructor(store) {
        this.container = null;
        this.store = store;
        this.touchTime = null;
        this.timeoutHandle = null;
        this.touchData = null;
    }

    attachContainer(container) {
        container.interactive = true;
        container.mousedown = container.touchstart = container.mousedownoutside = container.touchstartoutside =
            ({data}) => this.touchStart(data);
        container.mouseup = container.touchend = container.mouseupoutside = container.touchendoutside =
            ({data}) => this.touchEnd(data);
        this.container = container;
    }

    touchStart(data) {
        this.touchData = data;
        this.touchTime = Date.now();
        this.timeoutHandle = setTimeout(() => {
            this.store.dispatch(touchStartOnScreen(this.getTargetPoint(data)));
            this.container.mousemove = this.container.touchmove =
                ({data}) => this.touchMove(data);
        }, config.touchDelay)
    }

    touchEnd(data) {
        if (Date.now() - config.touchDelay > this.touchTime) {
            this.store.dispatch(touchEndOnScreen(this.getTargetPoint(data)));
            this.container.mousemove = this.container.touchmove = () => {};
            this.touchTime = Date.now();
            return;
        }
        clearTimeout(this.timeoutHandle);
        this.store.dispatch(tapOnScreen(this.getTargetPoint(this.touchData)));
    }

    touchMove(data) {
        if (Date.now() - config.touchDelay > this.touchTime) {
            this.store.dispatch(touchMoveOnScreen(this.getTargetPoint(data)));
            this.touchTime = Date.now();
        }
    }

    getTargetPoint(data) {
        return Point.fromPixiPoint(data.getLocalPosition(this.container));
    }
}
