/**
 * rotates.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import deepFreeze from "deep-freeze";
import { ROTATES } from ".";

export default dr => deepFreeze({
    id: ROTATES,
    dr
});
