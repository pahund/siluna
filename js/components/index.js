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
import respondsToTap from "./respondsToTap";
import rotates from "./rotates";
import rotatesToPoint from "./rotatesToPoint";
import rotatesToVector from "./rotatesToVector";

export const HAS_ANIMATION = Symbol("component “has animation”"),
    HAS_SPINE = Symbol("component “has spine”"),
    HAS_SPRITE = Symbol("component “has sprite”"),
    MOVES = Symbol("component “moves”"),
    MOVES_BY = Symbol("component “moves by”"),
    MOVES_TO = Symbol("component “moves to”"),
    RESPONDS_TO_TAP = Symbol("component “responds to tap”"),
    ROTATES = Symbol("component “rotates”"),
    ROTATES_TO_POINT = Symbol("component “rotates to point”"),
    ROTATES_TO_VECTOR = Symbol("component “rotates to vector”");

export function getByType(type) {
    switch (type) {
        case HAS_ANIMATION:
            return hasAnimation;
        case HAS_SPINE:
            return hasSpine;
        case HAS_SPRITE:
            return hasSprite;
        case MOVES:
            return moves;
        case MOVES_BY:
            return movesBy;
        case MOVES_TO:
            return movesTo;
        case RESPONDS_TO_TAP:
            return respondsToTap;
        case ROTATES:
            return rotates;
        case ROTATES_TO_POINT:
            return rotatesToPoint;
        case ROTATES_TO_VECTOR:
            return rotatesToVector;
    }
    throw new ReferenceError(`Cannot get component of type “${type}”`);
}
