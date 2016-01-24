/**
 * tinter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default (prevEntity, callback) => {
    let spriteComponent = prevEntity.hasSprite; // spine entities can't be tinted, apparently
    if (!spriteComponent) {
        throw new TypeError("cannot animate entity, it does not have a sprite (spine entities can't be tinted)");
    }
    console.log("[PH_LOG] invoking callback from animator system"); // PH_TODO: REMOVE
    callback();
    return deepFreeze({
        ...prevEntity,
        [spriteComponent.id]: {
            ...spriteComponent,
            tint: Math.random() * 0xFFFFFF
        }
    });
}

