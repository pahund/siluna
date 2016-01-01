/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";
import moves from "../components/moves";
import rotates from "../components/rotates";
import hasSprite from "../components/hasSprite";
import respondsToTap from "../components/respondsToTap";
import { TINT } from "../actions";

export default ({ config, reducers }) => {
    const store = createStore(reducers, {
        entity: {
            siluna: {
                hasSprite: hasSprite("siluna", "images/siluna.png", {
                    anchor: { x: 0.5, y: 0.1 },
                    position: {
                        x: config.gameDimensions.w / 2,
                        y: config.gameDimensions.h / 2
                    }
                }),
                moves: moves(-10, 10),
                rotates: rotates(0.05)
            },
            sirena: {
                hasSprite: hasSprite("sirena", "images/sirena.png", {
                    anchor: { x: 0.5, y: 0.1 },
                    position: {
                        x: config.gameDimensions.w / 2,
                        y: config.gameDimensions.h / 2
                    }
                }),
                moves: moves(8, 12),
                rotates: rotates(0.1)
            },
            sinalta: {
                hasSprite: hasSprite("sinalta", "images/sirena.png", {
                    anchor: { x: 0.5, y: 0.1 },
                    position: {
                        x: config.gameDimensions.w / 2,
                        y: config.gameDimensions.h / 2
                    }
                }),
                moves: moves(3, 4),
                rotates: rotates(0.01),
                respondsToTap: respondsToTap(TINT, "sinalta")
            }
        },
        config
    });
    return store;
};

