/**
 * preload.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
export default function () {
    const { game } = this;
    // game.load.spritesheet('feliz', 'assets/spritesheets/feliz.png', 331, 510);
    game.load.spritesheet('limo', 'assets/spritesheets/limo.png', 550, 254);
    game.load.image('background', 'assets/images/background.png');
    game.load.atlas(
        'siluna',
        'assets/atlases/siluna-swimming.png',
        'assets/atlases/siluna-swimming.json'
    );
    game.load.atlas(
        'feliz',
        'assets/atlases/feliz.png',
        'assets/atlases/feliz.json'
    );
    game.load.atlas(
        'jamun',
        'assets/atlases/jamun.png',
        'assets/atlases/jamun.json'
    );
}
