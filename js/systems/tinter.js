/**
 * tinter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
import { HAS_SPRITE } from "../components";

export default (prevEntity, callback) => {
    let spriteComponent = prevEntity.get(HAS_SPRITE); // spine entities can't be tinted, apparently
    if (!spriteComponent) {
        throw new TypeError("cannot animate entity, it does not have a sprite (spine entities can't be tinted)");
    }
    callback();
    return new Map([
        ...prevEntity,
        [ HAS_SPRITE, {
            ...spriteComponent,
            tint: Math.random() * 0xFFFFFF
        }]
    ]);
}

