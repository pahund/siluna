/**
 * initialState.js
 *
 * This object describes the game setup when the game is started.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import Entities from "../entities/Entities";
import Entity from "../entities/Entity";
import hasAnimation from "../components/hasAnimation";
import hasSpine from "../components/hasSpine";
import hasDebugDots from "../components/hasDebugDots";
import {
    CHANGE_DIRECTION,
    TAP_ON_SCREEN,
    TOUCH_START_ON_SCREEN,
    TOUCH_MOVE_ON_SCREEN,
    TOUCH_END_ON_SCREEN,
    CURRENT_TAP,
    ANIMATE,
    ROTATE_TO_POINT,
    ROTATE_TO_VECTOR,
    MOVE_TO_POINT,
    START_MOVING_TO_POINT,
    STOP_MOVING_TO_POINT
} from "../actions";
import config from "../config";
import Point from "../math/Point";
import Vector from "../math/Vector";
import Group from "../actions/util/Group";
import Action from "../actions/util/Action";
import Sequence from "../actions/util/Sequence";
import {
    EASE_IN_OUT_SINE
} from "../math/easing";

export default {
    triggers: {
        [TAP_ON_SCREEN]: new Group(
            new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
            new Action(ANIMATE, "siluna", "swimming"),
            new Sequence(
                new Action(MOVE_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, EASE_IN_OUT_SINE),
                new Action(ROTATE_TO_VECTOR, "siluna", new Vector(0, -1), config.speed.rotation / 3),
                new Action(ANIMATE, "siluna", "treading-water")
            )
        ),
        [TOUCH_START_ON_SCREEN]: new Group(
            new Action(ROTATE_TO_POINT, "siluna", CURRENT_TAP, config.speed.rotation),
            new Action(START_MOVING_TO_POINT, "siluna", CURRENT_TAP, config.speed.movement, config.speed.lerp),
            new Action(ANIMATE, "siluna", "swimming")
        ),
        [TOUCH_MOVE_ON_SCREEN]: new Action(CHANGE_DIRECTION, "siluna", CURRENT_TAP, config.speed.rotation, config.speed.movement),
        [TOUCH_END_ON_SCREEN]: new Group(
            new Action(STOP_MOVING_TO_POINT, "siluna"),
            new Action(ANIMATE, "siluna", "treading-water"),
            new Action(ROTATE_TO_VECTOR, "siluna", new Vector(0, -1), config.speed.rotation / 3)
        )
    },
    entities: new Entities(
        new Entity("siluna",
            hasSpine("siluna", {
                anchor: { x: 0.5, y: 0.1 },
                //position: new Point(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
                position: new Point(100, 100),
                scale: 0.17
            }),
            hasDebugDots(),
            hasAnimation("treading-water")
        )
    )
};
