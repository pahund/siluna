/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";
import moves from "../components/moves";
import movesTo from "../components/movesTo";
import rotates from "../components/rotates";
import hasSprite from "../components/hasSprite";
import respondsToTap from "../components/respondsToTap";
import { TINT } from "../actions";

const speed = 10,
    margin = 250;

export default ({ config, reducers }) => {
    const store = createStore(reducers, {
        entity: {
            siluna: {
                hasSprite: hasSprite("images/siluna.png", {
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
                hasSprite: hasSprite("images/sirena.png"),
                movesTo: movesTo(config.gameDimensions.w - margin, config.gameDimensions.h - margin, speed)
                //rotates: rotates(0.1)
            },
            sirena2: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: config.gameDimensions.w,
                        y: config.gameDimensions.h
                    }
                }),
                movesTo: movesTo(margin, margin, speed)
            },
            sirena3: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: 0,
                        y: config.gameDimensions.h
                    }
                }),
                movesTo: movesTo(config.gameDimensions.w - margin, margin, speed)
            },
            sirena4: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: config.gameDimensions.w,
                        y: 0
                    }
                }),
                movesTo: movesTo(margin, config.gameDimensions.h - margin, speed)
            },
            sirena5: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: config.gameDimensions.w / 2,
                        y: 0
                    }
                }),
                movesTo: movesTo(config.gameDimensions.w / 2, config.gameDimensions.h - margin, speed)
            },
            sirena6: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: 0,
                        y: config.gameDimensions.h / 2
                    }
                }),
                movesTo: movesTo(config.gameDimensions.w - margin, config.gameDimensions.h / 2, speed)
            },
            sirena7: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: config.gameDimensions.w,
                        y: config.gameDimensions.h / 2
                    }
                }),
                movesTo: movesTo(margin, config.gameDimensions.h / 2, speed)
            },
            sirena8: {
                hasSprite: hasSprite("images/sirena.png", {
                    position: {
                        x: config.gameDimensions.w / 2,
                        y: config.gameDimensions.h
                    }
                }),
                movesTo: movesTo(config.gameDimensions.w / 2, margin, speed)
            },
            sinalta: {
                hasSprite: hasSprite("images/sirena.png", {
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

