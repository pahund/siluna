/**
 * preload.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
export default function () {
    this.game.add.plugin(Fabrique.Plugins.Spine);
    this.game.load.spine('siluna', 'assets/siluna.json');
    this.game.load.image('background', 'assets/background.png');
}
