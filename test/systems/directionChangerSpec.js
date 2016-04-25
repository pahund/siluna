/**
 * directionChangerSpec.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Apr 2016
 */
import chai from "chai";
import { stub, spy } from "sinon";
import sinonChai from "sinon-chai";

import { MOVES_TO, ROTATES_TO_POINT } from "../../js/components";
import directionChanger from "../../js/systems/directionChanger";

chai.should();
chai.use(sinonChai);

const testCases = [
    {
        input: {
            movesTo: "foo",
            rotatesToPoint: "bar"
        },
        expected: {
            movesTo: "foo",
            rotatesToPoint: "bar"
        }
    }
];

describe("[systems/directionChanger", () => {
    describe("When I pass a callback function to the direction changer system", () => {
        const callback = spy();
        directionChanger(setupEntity({}), {}, callback);
        describe("the callback", () =>
            it("is executed", () =>
                callback.should.have.been.called
            )
        );
    });

    testCases.forEach(testCase => {
        const { input, expected } = testCase;
        describe(`When I pass an entity with moves to component ${input.movesTo} and rotates to point component ${input.rotatesToPoint} to the direction changer system`, () => {
            const result = setupTestCase(input);
            describe("the entity returned by the system", () => {
                it(`has a moves to component ${expected.movesTo}`, () =>
                    result.get(MOVES_TO).should.equal(expected.movesTo)
                );
                it(`has a rotates to point component ${expected.rotatesToPoint}`, () =>
                    result.get(ROTATES_TO_POINT).should.equal(expected.rotatesToPoint)
                );
            });
        });
    });
});

function setupTestCase(input) {
    return directionChanger(setupEntity(input), {}, () => {});
}
function setupEntity(input) {
    const stubbyMcStubface = stub();
    stubbyMcStubface.withArgs(ROTATES_TO_POINT).returns(input.rotatesToPoint);
    stubbyMcStubface.withArgs(MOVES_TO).returns(input.movesTo);
    const entity = {
        get: stubbyMcStubface
    };
    return entity;
}
