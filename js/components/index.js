/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Jan 2016
 */
import hasAnimation from "./hasAnimation";
import hasSpine from "./hasSpine";
import hasSprite from "./hasSprite";
import moves from "./moves";
import movesBy from "./movesBy";
import movesTo from "./movesTo";
import movesWithAcceleration from "./movesWithAcceleration";
import respondsToTap from "./respondsToTap";
import rotates from "./rotates";
import rotatesToPoint from "./rotatesToPoint";
import rotatesToVector from "./rotatesToVector";
import hasDebugDots from "./hasDebugDots";

export const
    HAS_ANIMATION = Symbol("component “has animation”"),
    HAS_SPINE = Symbol("component “has spine”"),
    HAS_SPRITE = Symbol("component “has sprite”"),
    MOVES = Symbol("component “moves”"),
    MOVES_BY = Symbol("component “moves by”"),
    MOVES_TO = Symbol("component “moves to”"),
    MOVES_WITH_ACCELERATION = Symbol("component “moves with acceleration”"),
    RESPONDS_TO_TAP = Symbol("component “responds to tap”"),
    ROTATES = Symbol("component “rotates”"),
    ROTATES_TO_POINT = Symbol("component “rotates to point”"),
    ROTATES_TO_VECTOR = Symbol("component “rotates to vector”"),
    HAS_DEBUG_DOTS = Symbol("component “has debug dots”");

const mapping = {
    [HAS_ANIMATION]: hasAnimation,
    [HAS_SPINE]: hasSpine,
    [HAS_SPRITE]: hasSprite,
    [MOVES]: moves,
    [MOVES_BY]: movesBy,
    [MOVES_TO]: movesTo,
    [MOVES_WITH_ACCELERATION]: movesWithAcceleration,
    [RESPONDS_TO_TAP]: respondsToTap,
    [ROTATES]: rotates,
    [ROTATES_TO_POINT]: rotatesToPoint,
    [ROTATES_TO_VECTOR]: rotatesToVector,
    [HAS_DEBUG_DOTS]: hasDebugDots
};

/* eslint complexity: [2, 666] */
export function getByType(type) {
    const func = mapping[type];
    if (func) {
        return func;
    }
    throw new ReferenceError(`Cannot get component of type “${type}”`);
}
