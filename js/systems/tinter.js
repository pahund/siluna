/**
 * tinter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default prevEntity => {
    let spriteComponent = prevEntity.hasSprite; // spine entities can't be tinted, apparently
    if (!spriteComponent) {
        return prevEntity;
    }

    return deepFreeze({
        ...prevEntity,
        [spriteComponent.id]: {
            ...spriteComponent,
            tint: Math.random() * 0xFFFFFF
        }
    });
}

