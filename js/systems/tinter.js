/**
 * tinter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
export default (entity, sprite) => {
    if (entity.hasTint) {
        sprite.tint = entity.hasTint.tint;
    }
};

