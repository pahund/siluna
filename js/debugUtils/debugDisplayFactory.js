/**
 * frameRateDisplayFactory.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 28 Feb 2016
 */

let stage = null,
    text = null;

export default (stage, x, y) => {
    text = new PIXI.Text("", {
        font: "bold 50px Arial",
        fill: "white",
        stroke: "black",
        strokeThickness: 5
    });
    text.x = x;
    text.y = y;
    text.alpha = 0.5;
    stage.addChild(text);

    return message => text.text = message;
}
