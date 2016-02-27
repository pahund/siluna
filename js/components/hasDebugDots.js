/**
 * hasDebugDots.js
 *
 * If you add this component to sprite entities, they will draw a little red dot to the stage marking its current
 * position for every cycle of the game loop. Use this to trace the movement of a sprite on the screen to detect bugs.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 27 Feb 2016
 */
import { HAS_DEBUG_DOTS } from ".";

export default () => ({
    id: HAS_DEBUG_DOTS
});
