/**
 * Sprite.js
 *
 * We are wrapping PIXI's Sprite to make it more mathematical.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Jan 2016
 */
import PIXI from "pixi";
import Point from "../math/Point";

const POSITION = Symbol("position");

class SpriteWrapper  {

    constructor(sprite) {
        this.sprite = sprite;
        this[POSITION] = new Point(sprite.position.x, sprite.position.y);
    }

    static fromImage(image) {
        return new SpriteWrapper(PIXI.Sprite.fromImage(image));
    };

    static fromSpine(data) {
        return new SpriteWrapper(new PIXI.spine.Spine(data));
    }

    set position(position) {
        if (!(position instanceof Point)) {
            throw new TypeError("Position assigned to a sprite needs to be a point");
        }
        this.sprite.position = new PIXI.Point(position.x, position.y);
        this[POSITION] = position;
    }

    get position() {
        return this[POSITION];
    }

    set anchor(anchor) {
        this.sprite.anchor = anchor;
    }

    get anchor() {
        return this.sprite.anchor;
    }

    set rotation(rotation) {
        this.sprite.rotation = rotation;
    }

    get rotation() {
        return this.sprite.rotation;
    }

    set tint(tint) {
        this.sprite.tint = tint;
    }

    get tint() {
        return this.sprite.tint;
    }

    set scale(x) {
        // Only scale with fixed aspect ratio
        this.sprite.scale.set(x);
    }

    get scale() {
        // Only scale with fixed aspect ratio
        return this.sprite.scale.x;
    }

    set interactive(interactive) {
        this.sprite.interactive = interactive;
    }

    get interactive() {
        return this.sprite.interactive;
    }

    set click(click) {
        this.sprite.click = click;
    }

    get click() {
        return this.sprite.click;
    }

    set touchstart(touchstart) {
        this.sprite.touchstart = touchstart;
    }

    get touchstart() {
        return this.sprite.touchstart;
    }

    get state() {
        return this.sprite.state;
    }

    update(timeDelta) {
        // Siluna engine works with time deltas in ms, PIXI.spine uses seconds
        this.sprite.update(timeDelta / 1000);
    }

    appendTo(parent) {
        parent.addChild(this.sprite);
    }

}

export default SpriteWrapper;
