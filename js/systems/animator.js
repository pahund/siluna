/**
 * animator.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import deepFreeze from "deep-freeze";
import hasAnimation from "../components/hasAnimation";

export default (prevEntity, animation, callback) => {
    let spriteComponent = prevEntity.hasSpine;
    if (!spriteComponent) {
        throw new TypeError("cannot animate entity, it does not have a spine");
    }
    console.log("[PH_LOG] invoking callback from animator system"); // PH_TODO: REMOVE
    callback();
    return deepFreeze({
        ...prevEntity,
        hasAnimation: hasAnimation(animation)
    });
}
