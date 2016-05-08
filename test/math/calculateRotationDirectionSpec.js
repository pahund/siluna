/**
 * calculateRotationDirectionSpec.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 May 2016
 */
import chai from "chai";
import calculateRotationDirection from "../../js/math/calculateRotationDirection";

chai.should();

const testCases = [
    {
        input: { rad1: 0, rad2: 1 },
        expected: "ccw"
    },
    {
        input: { rad1: 0, rad2: 2 },
        expected: "ccw"
    },
    {
        input: { rad1: 0, rad2: 3 },
        expected: "ccw"
    },
    {
        input: { rad1: 0, rad2: Math.PI },
        expected: "ccw"
    },
    {
        input: { rad1: 0, rad2: 4 },
        expected: "cw"
    },
    {
        input: { rad1: 0, rad2: 5 },
        expected: "cw"
    },
    {
        input: { rad1: 0, rad2: 6 },
        expected: "cw"
    },
    {
        input: { rad1: 0, rad2: Math.PI * 2 },
        expected: "cw"
    }
];

describe("[systems/updater/util/calculateRotationDirection]", () => {
    testCases.forEach(({ input, expected }) =>
        describe("When I call calculateRotationDirection with " +
                 `rad1=${input.rad1} and rad2=${input.rad2}`, () => {
            describe("the result", () => {
                let result;
                beforeEach(() => (result = calculateRotationDirection(input.rad1, input.rad2)));
                it(`is ${expected}`, () => result.should.equal(expected));
            });

        })
    )
});
