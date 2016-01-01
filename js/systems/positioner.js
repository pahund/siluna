/**
 * positioner.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */

export default (entity, sprite) => {
    if (entity.hasPosition) {
        sprite.position.x = entity.hasPosition.x;
        sprite.position.y = entity.hasPosition.y;
    }
};
