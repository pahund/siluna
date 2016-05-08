/**
 * calculateRotationDirection.js
 *
 * Given two radians, calculates if you need to rotate clockwise or counter-clockwise to get
 * from radian 1 to radian 2.
 *
 * @param rad1 {Number} The first radian
 * @param rad2 {Number} The second radian
 * @returns {String} either “cw” (clockwise) or “ccw” (counter-clockwise)
 *
 * @see https://en.wikipedia.org/wiki/Radian#/media/File:Circle_radians.gif
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 May 2016
 */
export default (rad1, rad2) => Math.sin(rad2 - rad1) < 0 ? "cw" : "ccw";
