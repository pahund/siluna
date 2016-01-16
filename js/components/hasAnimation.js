/**
 * hasAnimation.js
 *
 * A component that makes an entity execute a Spine animation.
 * Works only on entities that have the "hasSpine" component.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Jan 2016
 */
import deepFreeze from "deep-freeze";

export default animation => deepFreeze({
    id: "hasAnimation",
    animation
});
