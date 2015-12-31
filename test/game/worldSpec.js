/**
 * world-spec.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 30 Dec 2015
 */
import { should } from "chai";
import worldManager from "../../js/game/worldManager";

should();

describe("[game/world]", () => {
    describe("Before the world is initialized", () => {
        describe("When I try to add an entity", () => {
            let throws;
            before(() => throws = () => worldManager.addEntity());
            describe("the world", () =>
                it("should throw an error", () =>
                    throws.should.throw("world has not been initialized")));
        });
    });
    describe("After the world has been initialized", () => {
        before(() => worldManager.init());
        describe("When I add an entity", () => {
            before(() => worldManager.addEntity("foo", [{ id: "bar", bar: "bar" }]));
            describe("and I get the entity", () => {
                let result;
                before(() => result = worldManager.getEntity("foo"));
                describe("the result object", () => {
                    it("has the ID I passed to “addEntity”", () => result.id.should.equal("foo"));
                    it("has a components property", () => result.components.should.exist);
                });
                describe("the result object's components map", () => {
                    it("has the correct size", () => result.components.size.should.equal(1));
                    it("has the component I passed to “addEntity” stored under its ID", () =>
                        result.components.get("bar").should.deep.equal({ id: "bar", bar: "bar" }));
                });
            });
        });

    });
});
