/**
 * Sprite.js
 *
 * We are extending PIXI's Sprite to make it more mathematical.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Jan 2016
 */
import { Sprite, Texture } from "pixi";

class ExtendedSprite extends PIXI.Sprite {

    constructor(...args) {
        super(...args);
    }

    static fromImage(imageId, crossorigin, scaleMode) {
        return new ExtendedSprite(Texture.fromImage(imageId, crossorigin, scaleMode));
    };

}

export default ExtendedSprite;
