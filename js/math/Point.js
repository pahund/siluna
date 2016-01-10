/**
 * Point.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./Vector");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVector(vector) {
        return new Point(this.x + vector.x, this.y + vector.y);
    }

    subtractPoint(point) {
        if (!(point instanceof Point)) {
            throw new TypeError("Point argument passed to Vector.subtractPoint needs to be a point");
        }
        return new Vector(this.x - point.x, this.y - point.y);
    }

    equals(point) {
        return point instanceof Point && this.x === point.x && this.y === point.y;
    }

    clone() {
        return new Point(this.x, this.y);
    }

    static fromPixiPoint({ x, y }) {
        return new Point(x, y);
    }
}

module.exports = Point;
