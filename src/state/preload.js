/**
 * preload.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
export default function () {
    this.game.add.plugin(Fabrique.Plugins.Spine);
    this.game.load.spritesheet('feliz', 'assets/feliz.png', 331, 510);
    this.game.load.image('background', 'assets/background.png');
}
