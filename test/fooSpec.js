/**
 * fooSpec.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 01 Jan 2016
 */
import { should } from "chai";

should();

describe("truth", () => {
    const truth = true;
    it("should be ok", () => {
        truth.should.be.ok;
    });
});
