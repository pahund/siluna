/**
 * makeLoader.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Jan 2016
 */
import config from "../config";
import PIXI from "pixi";

export default () => {
    const loader = new PIXI.loaders.Loader();
    config.assets.bundles.forEach(bundle => loader.add(bundle, config.assets.path + bundle + ".json"));
    return loader;
}
