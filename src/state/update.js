/**
 * update.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
function awayFromCursor(game, object) {
    return !Phaser.Circle.contains(new Phaser.Circle(object.x, object.y, 20), game.input.x, game.input.y);
}

export default function () {
    const { game, feliz } = this;

    if (game.input.mousePointer.isDown && awayFromCursor(game, feliz)) {
        game.physics.arcade.moveToPointer(feliz, 400);
    } else {
        feliz.body.velocity.setTo(0, 0);
    }
}
