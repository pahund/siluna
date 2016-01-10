/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";
import moves from "../components/moves";
import movesTo from "../components/movesTo";
import movesToTap from "../components/movesToTap";
import rotates from "../components/rotates";
import hasSprite from "../components/hasSprite";
import hasSpine from "../components/hasSpine";
import respondsToTap from "../components/respondsToTap";
import { TINT } from "../actions";
import config from "../config";
import reducers from "../reducers";
import Point from "../math/Point";

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
                //moves: moves(-10, 10),
                //rotates: rotates(0.05)
            }
            //sirena: {
            //    hasSprite: hasSprite("images/sirena.png"),
            //    movesTo: movesTo(config.gameDimensions.w - config.margin, config.gameDimensions.h - config.margin, config.speed)
            //    //rotates: rotates(0.1)
            //},
            //sirena2: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: config.gameDimensions.w,
            //            y: config.gameDimensions.h
            //        }
            //    }),
            //    movesTo: movesTo(config.margin, config.margin, config.speed),
            //    movesToTap: movesToTap(config.speed)
            //},
            //sirena3: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: 0,
            //            y: config.gameDimensions.h
            //        }
            //    }),
            //    movesTo: movesTo(config.gameDimensions.w - config.margin, config.margin, config.speed)
            //},
            //sirena4: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: config.gameDimensions.w,
            //            y: 0
            //        }
            //    }),
            //    movesTo: movesTo(config.margin, config.gameDimensions.h - config.margin, config.speed)
            //},
            //sirena5: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: config.gameDimensions.w / 2,
            //            y: 0
            //        }
            //    }),
            //    movesTo: movesTo(config.gameDimensions.w / 2, config.gameDimensions.h - config.margin, config.speed)
            //},
            //sirena6: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: 0,
            //            y: config.gameDimensions.h / 2
            //        }
            //    }),
            //    movesTo: movesTo(config.gameDimensions.w - config.margin, config.gameDimensions.h / 2, config.speed)
            //},
            //sirena7: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: config.gameDimensions.w,
            //            y: config.gameDimensions.h / 2
            //        }
            //    }),
            //    movesTo: movesTo(config.margin, config.gameDimensions.h / 2, config.speed)
            //},
            //sirena8: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        position: {
            //            x: config.gameDimensions.w / 2,
            //            y: config.gameDimensions.h
            //        }
            //    }),
            //    movesTo: movesTo(config.gameDimensions.w / 2, config.margin, config.speed)
            //},
            //sinalta: {
            //    hasSprite: hasSprite("images/sirena.png", {
            //        anchor: { x: 0.5, y: 0.1 },
            //        position: {
            //            x: config.gameDimensions.w / 2,
            //            y: config.gameDimensions.h / 2
            //        }
            //    }),
            //    moves: moves(3, 4),
            //    rotates: rotates(0.01),
            //    respondsToTap: respondsToTap(TINT, "sinalta")
            //}
        }
    });
    return store;
};

