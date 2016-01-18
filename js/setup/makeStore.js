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
import {
    CURRENT_TAP,
    ANIMATE,
    TINT,
    ROTATE_TO_POINT,
    ROTATE_TO_VECTOR,
    MOVE_TO_POINT
} from "../actions";
import config from "../config";
import reducers from "../reducers";
import Point from "../math/Point";
import Vector from "../math/Vector";
import Group from "../actions/Group";
import Action from "../actions/Action";
import Sequence from "../actions/Sequence";
import { EASE_IN_OUT_SINE } from "../math/easing";

export default () => {
    const store = createStore(reducers, {
        triggers: {
            tapOnScreen: new Group(
                new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
                new Action(ANIMATE, "siluna", "swimming"),
                new Sequence(
                    new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE),
                    new Action(ROTATE_TO_VECTOR, "siluna", new Vector(0, -1), config.speed.rotation / 3),
                    new Action(ANIMATE, "siluna", "treading-water")
                )
            )
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

