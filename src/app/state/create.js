/**
 * create.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
function createFeliz(game) {
    const feliz = game.add.sprite(440, 240, 'feliz');
    game.physics.arcade.enable(feliz);
    feliz.animations.add('moving', [ 1, 0, 1, 2 ], 3, true);
    feliz.animations.play('moving');
    feliz.anchor.setTo(0.2, 0.1);
    return feliz;
}

function createSiluna(game) {
    const siluna = game.add.sprite(840, 240, 'siluna');
    game.physics.arcade.enable(siluna);
    siluna.animations.add('moving', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 15, true);
    siluna.animations.play('moving');
    siluna.anchor.setTo(0.2, 0.1);
    return siluna;
}

function createLimo(game) {
    const limo = game.add.sprite(-275, 100, 'limo');
    limo.scale.setTo(0.5, 0.5);
    game.physics.arcade.enable(limo);
    limo.animations.add('moving', [ 1, 0, 1, 2 ], 3, true);
    limo.animations.play('moving');
    limo.body.velocity.setTo(100, 0);
    game.add.tween(limo).to({ y: 150 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    return limo;
}

function createBackground(game) {
    const background = game.add.image(0, 0, 'background');
    background.width = 1440;
    background.height = 900;
    return background;
}

export default function () {
    const { game, scale } = this;
    game.world.setBounds(0, 0, 2000, 2000);
    scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    scale.pageAlignVertically = true;
    scale.pageAlignHorizontally = true;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    createBackground(game);
    this.limo = createLimo(game);
    this.feliz = createFeliz(game);
    createSiluna(game);
}
