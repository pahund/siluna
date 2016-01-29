/**
 * tinter.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jan 2016
 */
export default (prevEntity, callback) => {
    let spriteComponent = prevEntity.get("hasSprite"); // spine entities can't be tinted, apparently
    if (!spriteComponent) {
        throw new TypeError("cannot animate entity, it does not have a sprite (spine entities can't be tinted)");
    }
    callback();
    return new Map([
        ...prevEntity,
        [ "hasSprite", {
            ...spriteComponent,
            tint: Math.random() * 0xFFFFFF
        }]
    ]);
}

