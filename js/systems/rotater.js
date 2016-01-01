/**
 * rotater.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 31 Dec 2015
 */
export default (entity, sprite) => {
    if (entity.hasRotation) {
        sprite.rotation = entity.hasRotation.r
    }
};
