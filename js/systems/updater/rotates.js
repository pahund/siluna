/**
 * rotates.js
 *
 * Updates the coordinates of sprites that are attached to entities with the “rotates” component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
export default entity => {
    if (!entity.hasSprite) {
        return;
    }
    const dr = entity.rotates.dr,
        r = entity.hasSprite.rotation + dr;
    entity.hasSprite = Object.assign(entity.hasSprite, { rotation: r });
}

