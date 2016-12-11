/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Dec 2016
 */
import preload from './state/preload';
import create from './state/create';
import update from './state/update';

new Phaser.Game(1440, 900, Phaser.AUTO, '', { preload, create, update });


