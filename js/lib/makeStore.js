/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";
import hasPosition from "../components/hasPosition";
import moves from "../components/moves";
import hasRotation from "../components/hasRotation";
import rotates from "../components/rotates";

export default ({ config, reducers }) => {
    const store = createStore(reducers, {
        entity: {
            siluna: {
                hasPosition: hasPosition(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                moves: moves(10, 10),
                hasRotation: hasRotation(0),
                rotates: rotates(0.05)
            },
            sirena: {
                hasPosition: hasPosition(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                moves: moves(8, 12),
                hasRotation: hasRotation(120),
                rotates: rotates(0.01)
            },
            sinalta: {
                hasPosition: hasPosition(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                moves: moves(13, 7),
                hasRotation: hasRotation(240),
                rotates: rotates(0.1)
            }
        },
        config
    });
    return store;
};

