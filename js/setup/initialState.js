/**
 * initialState.js
 *
 * This object describes the game setup when the game is started.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import hasAnimation from "../components/hasAnimation";
import hasSpine from "../components/hasSpine";
import {
    CURRENT_TAP,
    ANIMATE,
    ROTATE_TO_POINT,
    ROTATE_TO_VECTOR,
    MOVE_TO_POINT
} from "../actions";
import {
    HAS_SPINE,
    HAS_ANIMATION
} from "../components";
import config from "../config";
import Point from "../math/Point";
import Vector from "../math/Vector";
import Group from "../actions/Group";
import Action from "../actions/Action";
import Sequence from "../actions/Sequence";
import { EASE_IN_OUT_SINE } from "../math/easing";

export default {
    triggers: {
        //tapOnScreen: new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE)

        //tapOnScreen: new Sequence(
        //    new Group(
        //        new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE),
        //        new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
        //        new Action(ANIMATE, "siluna", "swimming")
        //    ),
        //    new Action(ROTATE_TO_VECTOR, "siluna", new Vector(0, -1), config.speed.rotation / 3),
        //    new Action(ANIMATE, "siluna", "treading-water")
        //)

        //tapOnScreen: new Group(
        //    new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE),
        //    new Group(
        //        new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
        //        new Action(ANIMATE, "siluna", "swimming")
        //    )
        //)

        //tapOnScreen: new Sequence(
        //    new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
        //    new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE)
        //)

        //tapOnScreen: new Sequence(
        //    new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
        //    new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE),
        //    new Action(ANIMATE, "siluna", "swimming")
        //)

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
    entities: new Map([
        [ "siluna", new Map([
            [ HAS_SPINE, hasSpine("siluna", {
                anchor: { x: 0.5, y: 0.1 },
                position: new Point(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                scale: 0.17
            }) ],
            [ HAS_ANIMATION, hasAnimation("treading-water") ]
        ]) ]
    ])
};
