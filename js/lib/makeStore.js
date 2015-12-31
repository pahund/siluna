/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";

export default ({ config, reducers }) => {
    const store = createStore(reducers, {
        entity: {
            siluna: {
                increment: {
                    x: 6,
                    y: 9,
                    r: 0.05
                },
                position: {
                    x: config.gameDimensions.w / 2,
                    y: config.gameDimensions.h / 2
                },
                rotation: 0,
                tint: 0xFFFFFF
            },
            sirena: {
                increment: {
                    x: 10,
                    y: 10,
                    r: 0.05
                },
                position: {
                    x: config.gameDimensions.w / 2,
                    y: config.gameDimensions.h / 2
                },
                rotation: 0,
                tint: 0xFFFFFF
            },
            sinalta: {
                increment: {
                    x: 12,
                    y: 6,
                    r: 0.05
                },
                position: {
                    x: config.gameDimensions.w / 2,
                    y: config.gameDimensions.h / 2
                },
                rotation: 0,
                tint: 0xFFFFFF
            }
        },
        config
    });
    return store;
};

