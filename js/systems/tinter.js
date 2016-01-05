/**
 * tinter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
export default entity => {
    if (!entity.hasSprite) {
        return;
    }
    entity.hasSprite = Object.assign(entity.hasSprite, { tint: Math.random() * 0xFFFFFF });
    return entity;
}

