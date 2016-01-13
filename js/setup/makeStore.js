/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";
import moves from "../components/moves";
import movesTo from "../components/movesTo";
import movesBy from "../components/movesBy";
import movesToTap from "../components/movesToTap";
import rotates from "../components/rotates";
import hasSprite from "../components/hasSprite";
import hasSpine from "../components/hasSpine";
import respondsToTap from "../components/respondsToTap";
import { TINT } from "../actions";
import config from "../config";
import reducers from "../reducers";
import Point from "../math/Point";
import Vector from "../math/Vector";

export default () => {
    const store = createStore(reducers, {
        entities: {
            siluna: {
                hasSpine: hasSpine("siluna", {
                    anchor: { x: 0.5, y: 0.1 },
                    position: new Point(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                    scale: 0.17
                }),
                hasAnimation: {
                    animation: "treading-water"
                },
                movesToTap: movesToTap(config.speed)
            }
        }
    });
    return store;
};

