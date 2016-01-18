/**
 * resumeSequence.js
 *
 * Action used by systems to tell the triggers reducer that execution of something is done (e.g. moving an entity to
 * some place) and that it can resume with the next item of a sequence.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Jan 2016
 */

import { RESUME_SEQUENCE } from ".";

export default ids => ({
    type: RESUME_SEQUENCE,
    ids
})
