/**
 * VectorSpec.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 May 2016
 */
import chai from "chai";
import Vector from "../../js/math/Vector";

chai.should();

describe("[math/Vector]", () => {
    describe("When I create a vector with x=0 and y=10", () => {
        let vector;
        beforeEach(() => vector = new Vector(0, 10));
        describe("the vector", () => {
            it("has length 10", () =>
                vector.length.should.equal(10));
            it("has length squared x", () =>
                vector.lengthSqr.should.equal(100));
            it("has normalized Vector(1, 0)", () =>
                vector.normalized.equals(new Vector(0, 1)).should.be.ok);
            it("has deg 90", () =>
                vector.deg.should.equal(180));
            it("has rad pi", () =>
                vector.rad.should.equal(Math.PI));
        });
    });
    describe("When I create a vector with x=10 and y=0", () => {
        let vector;
        beforeEach(() => vector = new Vector(10, 0));
        describe("the vector", () => {
            it("has length 10", () =>
                vector.length.should.equal(10));
            it("has length squared x", () =>
                vector.lengthSqr.should.equal(100));
            it("has normalized Vector(1, 0)", () =>
                vector.normalized.equals(new Vector(1, 0)).should.be.ok);
            it("has deg 90", () =>
                vector.deg.should.equal(90));
            it("has rad pi/2", () =>
                vector.rad.should.equal(Math.PI / 2));
        });
    });
    describe("When I create a vector with x=10 and y=10", () => {
        let vector;
        beforeEach(() => vector = new Vector(10, 10));
        describe("the vector", () => {
            it("has length 14.142", () =>
                vector.length.should.equal(14.142135623730951));
            it("has length squared x", () =>
                vector.lengthSqr.should.equal(200));
            it("has normalized Vector(0.707, 0.707)", () =>
                vector.normalized.equals(new Vector(0.7071067811865475, 0.7071067811865475))
                      .should.be.ok);
            it("has deg 135", () =>
                vector.deg.should.equal(135));
            it("has rad 2.356", () =>
                vector.rad.should.equal(2.356194490192345));
        });
    });
});
