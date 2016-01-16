/**
 * animator.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import hasAnimation from "../components/hasAnimation";

export default (prevEntity, animation) => {
    let spriteComponent = prevEntity.hasSpine;
    if (!spriteComponent) {
        return prevEntity;
    }
    return deepFreeze({
        ...prevEntity,
        hasAnimation: hasAnimation(animation)
    });
}
