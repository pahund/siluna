/**
 * create.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
export default function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    const background =  this.game.add.image(0, 0, 'background');
    background.width = 1440;
    background.height = 900;

    const siluna = this.game.add.spine(720, 400, 'siluna');
    siluna.setAnimationByName(0, 'treading-water', true);
    siluna.scale.setTo(0.1, 0.1);
}
