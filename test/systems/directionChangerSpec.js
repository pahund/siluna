/**
 * directionChangerSpec.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Apr 2016
 */
import chai from "chai";
import { stub, spy } from "sinon";
import sinonChai from "sinon-chai";
import Point from "../../js/math/Point";
import Vector from "../../js/math/Vector";

import {
    HAS_SPRITE,
    HAS_SPINE,
    MOVES_WITH_ACCELERATION,
    ROTATES_TO_POINT
} from "../../js/components";
import directionChanger from "../../js/systems/directionChanger";

chai.should();
chai.use(sinonChai);

const testCases = [
    {
        input: {
            target: new Point(500, 1000),
            rotationSpeed: 0,
            movementSpeed: 100,
            hasSprite: {
                position: new Point(500, 0)
            },
            movesWithAcceleration: {
                id: MOVES_WITH_ACCELERATION,
                target: new Point(1000, 0),
                targetSpeed: 100,
                originalTargetSpeed: 100,
                velocity: new Vector(1, 0)
            }
        },
        expected: {
            movesWithAcceleration: {
                id: MOVES_WITH_ACCELERATION,
                target: new Point(500, 1000),
                targetSpeed: 100,
                originalTargetSpeed: 100,
                velocity: new Vector(0, 1)
            }
        }
    },
    {
        input: {
            target: new Point(500, 1000),
            rotationSpeed: 0,
            movementSpeed: 100,
            hasSprite: {
                position: new Point(500, 0)
            },
            movesWithAcceleration: {
                id: MOVES_WITH_ACCELERATION,
                target: new Point(1000, 0),
                targetSpeed: 0,
                originalTargetSpeed: 100,
                velocity: new Vector(1, 0)
            }
        },
        expected: {
            movesWithAcceleration: {
                id: MOVES_WITH_ACCELERATION,
                target: new Point(500, 1000),
                targetSpeed: 100,
                originalTargetSpeed: 100,
                velocity: new Vector(0, 1)
            }
        }
    },
    {
        input: {
            target: new Point(500, 1000),
            rotationSpeed: 100,
            movementSpeed: 0,
            hasSprite: {
                position: new Point(500, 0)
            },
            rotatesToPoint: {
                id: ROTATES_TO_POINT,
                target: new Point(1000, 0),
                velocity: new Vector(1000, 0),
                speed: 100,
                direction: "ccw"
            }
        },
        expected: {
            rotatesToPoint: {
                id: ROTATES_TO_POINT,
                target: new Point(500, 1000),
                velocity: new Vector(0, 1000),
                speed: 100,
                direction: "ccw"
            }
        }
    }
];

describe("[systems/directionChanger", () => {
    describe("When I pass an entity that does not have a sprite component to the direction " +
             "changer system", () => {
        function thisWillFail() {
            directionChanger({ get() {}, toString() { return "foo" } }, new Point(0, 0));
        }
        describe("an error", () => it("is thrown", () =>
                thisWillFail.should.throw("Direction changer system received an entity that does " +
                                          "not have a sprite component: foo")));

    });
    describe("When I pass a callback function to the direction changer system", () => {
        const callback = spy();
        directionChanger(setupEntity({}), new Point(0, 0), 0, 0, callback);
        describe("the callback", () => it("is executed", () => callback.should.have.been.called));
    });

    testCases.forEach(testCase => {
        const { input, expected } = testCase;
        const conditions = [];
        if (input.hasSpine) {
            conditions.push(` with “has spine” component ${input.hasSpine}`);
        }
        if (input.movesWithAcceleration) {
            conditions.push(
                ` with “moves with acceleration” component ${input.movesWithAcceleration}`);
        }
        if (input.rotatesToPoint) {
            conditions.push(
                ` with “rotates to point” component ${input.rotatesToPoint}`);
        }
        describe(`When I pass an entity${conditions.join(" and")} ` +
                `to the direction changer system with target ${input.target}`, () => {
            const result = setupTestCase(input);
            describe("the entity returned by the system", () => {
                if (input.movesWithAcceleration) {
                    it(`has a moves to component ${expected.movesWithAcceleration}`, () =>
                        result.get(MOVES_WITH_ACCELERATION).should.deep.equal(
                            expected.movesWithAcceleration)
                    );
                }
                if (input.rotatesToPoint) {
                    it(`has a rotates to point component ${expected.rotatesToPoint}`, () =>
                        result.get(ROTATES_TO_POINT).should.deep.equal(expected.rotatesToPoint)
                    );
                }
            });
        });
    });
});

function setupTestCase(input) {
    return directionChanger(setupEntity(input), input.target, input.rotationSpeed,
                            input.movementSpeed, () => {});
}

function setupEntity({ hasSprite, hasSpine, rotatesToPoint, movesWithAcceleration }) {
    const get = stub();
    if (!hasSpine && !hasSprite) {
        hasSprite = "quux";
    }
    get.withArgs(ROTATES_TO_POINT).returns(rotatesToPoint);
    get.withArgs(MOVES_WITH_ACCELERATION).returns(movesWithAcceleration);
    get.withArgs(HAS_SPRITE).returns(hasSprite);
    get.withArgs(HAS_SPINE).returns(hasSpine);
    const entity = {
        get,
        toString() {
            return "MOCK_ENTITY";
        },
        update(...components) {
            components.forEach(component => {
                switch (component.id) {
                    case ROTATES_TO_POINT:
                        get.withArgs(ROTATES_TO_POINT).returns(component);
                        break;
                    case MOVES_WITH_ACCELERATION:
                        get.withArgs(MOVES_WITH_ACCELERATION).returns(component);
                        break;
                }
            });
            return this;
        }
    };
    return entity;
}
