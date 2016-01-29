/**
 * animator.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import hasAnimation from "../components/hasAnimation";

export default (prevEntity, animation, callback) => {
    let spriteComponent = prevEntity.get("hasSpine");
    if (!spriteComponent) {
        throw new TypeError("cannot animate entity, it does not have a spine");
    }
    callback();
    return new Map([
        ...prevEntity,
        [ "hasAnimation", hasAnimation(animation) ]
    ]);
}
