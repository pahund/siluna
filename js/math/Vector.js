/**
 * Vector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
import approach from "./approach";

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get lengthSqr() {
        return this.x * this.x + this.y * this.y;
    }

    get normalized() {
        return new Vector(this.x / this.length, this.y / this.length);
    }

    get deg() {
        return this.rad * 180 / Math.PI;
    }

    get rad() {
        return Math.atan2(this.x, -this.y);
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(scale) {
        return new Vector(this.x * scale, this.y * scale);
    }

    divide(scale) {
        return new Vector(this.x / scale, this.y / scale);
    }

    approach(target, delta) {
        return new Vector(
            approach(target.x, this.x, delta),
            approach(target.y, this.y, delta)
        );
    }

    equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }

    clone() {
        return new Vector(this.x, this.y);
    }

    dotProduct(vector) {
        const a = this.normalized,
            b = vector.normalized;
        return a.x * b.x + a.y * b.y;
    }

    static fromDeg(degrees) {
        return Vector.fromRad(degrees * (Math.PI / 180));
    }

    static fromRad(radians) {
        return new Vector(Math.sin(radians), Math.cos(radians));
    }
}

export default Vector;
