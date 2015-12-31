/**
 * futureEventsSpec.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 30 Dec 2015
 */
import { should } from "chai";

should();

describe("truth", () => {
    const truth = true;
    it("should be ok", () => {
        truth.should.be.ok;
    });
});
