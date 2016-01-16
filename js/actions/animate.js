/**
 * animate.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 16 Jan 2016
 */
import { ANIMATE } from  ".";

export default (entity, animation) => ({
    type: ANIMATE,
    entity,
    animation
})

