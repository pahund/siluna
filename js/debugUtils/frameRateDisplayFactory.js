/**
 * frameRateDisplayFactory.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 28 Feb 2016
 */
import debugDisplayFactory from "./debugDisplayFactory";
import config from "../config";

export default (stage, x, y) => {
    if (!config.debug.displayFrameRate) {
        return () => {};
    }
    const display = debugDisplayFactory(stage, x, y);
    let timer = Date.now(),
        frameCounter = 0;
    return () => {
        frameCounter++;
        if (Date.now() - timer > 1000) {
            display(frameCounter + " fps");
            timer = Date.now();
            frameCounter = 0;
        }
    }
}
