/**
 * create.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
export default function () {
    const { game, scale } = this;
    scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    scale.pageAlignVertically = true;
    scale.pageAlignHorizontally = true;
    game.physics.startSystem(Phaser.Physics.ARCADE);

    const background =  game.add.image(0, 0, 'background');
    background.width = 1440;
    background.height = 900;

    const feliz = game.add.sprite(640, 240, 'feliz');
    game.physics.arcade.enable(feliz);
    feliz.animations.add('moving', [ 1, 0, 1, 2 ], 3, true);
    feliz.animations.play('moving');
}
