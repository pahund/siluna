/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore } from "redux";
import moves from "../components/moves";
import hasAnimation from "../components/hasAnimation";
import movesTo from "../components/movesTo";
import movesBy from "../components/movesBy";
import rotates from "../components/rotates";
import hasSprite from "../components/hasSprite";
import hasSpine from "../components/hasSpine";
import respondsToTap from "../components/respondsToTap";
import { CURRENT_ENTITY, CURRENT_TAP, ANIMATE, TINT, ROTATE_TO_POINT, MOVE_TO_POINT } from "../actions";
import config from "../config";
import reducers from "../reducers";
import Point from "../math/Point";
import Vector from "../math/Vector";
import { EASE_IN_OUT_SINE } from "../math/easing";

export default () => {
    const store = createStore(reducers, {
        triggers: {
            tapOnScreen: [
                //sequence: {
                //    moveTo: [ "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE ],
                //    simultaneous: {
                //        rotateToVector: [ "siluna", new Vector(0, -1) ],
                //        animate: [ "siluna", "treading-water" ]
                //    }
                //},
                [ MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE ],
                [ ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation ],
                [ ANIMATE, "siluna", "swimming" ]
            ],
            dispatches: []
        },
        entities: {
            siluna: {
                hasSpine: hasSpine("siluna", {
                    anchor: { x: 0.5, y: 0.1 },
                    position: new Point(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                    scale: 0.17
                }),
                hasAnimation: hasAnimation("treading-water")
            }
        }
    });
    return store;
};

