/**
 * update.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jan 2016
 */
import { UPDATE } from  ".";

export default (entity, timeDelta) => ({
    type: UPDATE,
    entity,
    timeDelta
});
