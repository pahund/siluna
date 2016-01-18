/**
 * triggers.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Jan 2016
 */
import { should } from "chai";
import Action from "../../js/actions/Action";
import Group from "../../js/actions/Group";
import Sequence from "../../js/actions/Sequence";
import { TAP_ON_SCREEN, MOVE_TO_POINT, TINT, CURRENT_TAP } from "../../js/actions";
import tapOnScreen from "../../js/actions/tapOnScreen";
import triggers from "../../js/reducers/triggers";
import Point from "../../js/math/Point";

should();

describe("[reducers/triggers]", () => {
    describe("Given a state that contains one “tap on screen“ action with type “foo”", () => {
        let state;
        before(() => state = { tapOnScreen: new Action("foo") });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let throws;
                before(() => throws = () => triggers(state, action));
                describe("a reference error", () =>
                    it("is thrown because there is no action “foo”", () => throws.should.throw(ReferenceError))
                );
            });
        });
    });
    describe("Given a state that contains one “tap on screen“ action with type “move to point”", () => {
        let state;
        before(() => state = { tapOnScreen: new Action(MOVE_TO_POINT) });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let throws;
                before(() => throws = () => triggers(state, action));
                describe("a reference error", () =>
                    it("is thrown because no entity was specified", () => throws.should.throw(ReferenceError))
                );
            });
        });
    });
    describe("Given a state that contains one “tap on screen“ action " +
            "with type “move to point” and argument “bar”", () => {
        let state;
        before(() => state = { tapOnScreen: new Action(MOVE_TO_POINT, "bar") });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let throws;
                before(() => throws = () => triggers(state, action));
                describe("a reference error", () =>
                    it("is thrown because the target argument was not provided", () => throws.should.throw(ReferenceError))
                );
            });
        });
    });
    describe("Given a state that contains one “tap on screen“ action " +
            "with arguments “MOVE_TO_POINT”, “foo” and Point(100, 100)", () => {
        let state;
        before(() => state = { tapOnScreen: new Action(MOVE_TO_POINT, "foo", new Point(100, 100)) });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let result;
                before(() => result = triggers(state, action));
                describe("the result", () =>
                    it("has a “dispatches” property", () => result.dispatches.should.exist)
                );
                describe("the “dispatches” property of the result", () => {
                    it("is an array", () => result.dispatches.should.be.an("Array"));
                    it("is an array with one element", () => result.dispatches.length.should.equal(1));
                    it("contains a dispatchable action of type “move to point”", () =>
                        result.dispatches[0].type.should.equal(MOVE_TO_POINT)
                    );
                    it("contains a dispatchable action with entity “foo”", () =>
                        result.dispatches[0].entity.should.equal("foo")
                    );
                    it("contains a dispatchable action with target Point(100, 100)", () =>
                        result.dispatches[0].target.should.deep.equal(new Point(100, 100))
                    );
                });
            });
        });
    });
    describe("Given a state that contains one “tap on screen“ action " +
            "with arguments “MOVE_TO_POINT”, “foo” and “CURRENT_TAP", () => {
        let state;
        before(() => state = { tapOnScreen: new Action(MOVE_TO_POINT, "foo", CURRENT_TAP) });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let result;
                before(() => result = triggers(state, action));
                describe("the “dispatches” property of the result", () => {
                    it("contains a dispatchable action with target Point(0, 0)," +
                            "i.e. the position of the tap on the screen", () =>
                        result.dispatches[0].target.should.deep.equal(new Point(0, 0))
                    );
                });
            });
        });
    });
    describe("Given a state that contains a group with a “move to point” and a “tint” action", () => {
        let state;
        before(() => state = {
            tapOnScreen: new Group(
                new Action(MOVE_TO_POINT, "foo", new Point(0, 0)),
                new Action(TINT)
            )
        });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let result;
                before(() => result = triggers(state, action));
                describe("the “dispatches” property of the result", () =>
                    it("is an array with two elements", () => result.dispatches.length.should.equal(2))
                );
                describe("the first element of the “dispatches” property of the result", () =>
                    it("is a dispatchable action of type “move to point”", () =>
                        result.dispatches[0].type.should.equal(MOVE_TO_POINT)
                    )
                );
                describe("the second element of the “dispatches” property of the result", () =>
                    it("is a dispatchable action of type “tint”", () =>
                        result.dispatches[1].type.should.equal(TINT)
                    )
                );
            });
        })
    });
    describe("Given a state that contains a sequence with a “move to point” and a “tint” action", () => {
        let state;
        before(() => state = {
            tapOnScreen: new Sequence(
                new Action(MOVE_TO_POINT, "foo", new Point(0, 0)),
                new Action(TINT)
            )
        });
        describe("and an action of type “tap on screen”", () => {
            let action;
            before(() => action = tapOnScreen(new Point(0, 0)));
            describe("when the state and action are passed to the “reduce triggers” function", () => {
                let result;
                before(() => result = triggers(state, action));
                describe("the “dispatches” property of the result", () =>
                    it("is an array with one element", () => result.dispatches.length.should.equal(1))
                );
                describe("the element in the “dispatches” array of the result", () => {
                    it("is a dispatchable action of type “move to point”", () =>
                        result.dispatches[0].type.should.equal(MOVE_TO_POINT)
                    );
                });
                describe("the “pending” property of the result", () => {
                    it("exists", () => result.pending.should.exist);
                    it("is an object", () => result.pending.should.be.an("object"));
                });
            });
        })
    });
});
