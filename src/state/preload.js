/**
 * preload.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
export default function () {
    const { game } = this;
    game.add.plugin(Fabrique.Plugins.Spine);
    game.load.spritesheet('feliz', 'assets/feliz.png', 331, 510);
    game.load.spritesheet('limo', 'assets/limo.png', 550, 254);
    game.load.image('background', 'assets/background.png');
}
