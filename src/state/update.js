/**
 * update.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */

function awayFromCursor(input, object) {
    const { Circle } = Phaser;
    return !Circle.contains(new Circle(object.x, object.y, 20), input.x, input.y);
}

export default function () {
    const { game: { input, physics: { arcade } }, feliz, limo } = this;
    if (input.mousePointer.isDown && awayFromCursor(input, feliz)) {
        arcade.moveToPointer(feliz, 400);
    } else {
        feliz.body.velocity.setTo(0, 0);
    }
    if (limo.x > 1440) {
        limo.x = -275;
    }
}
