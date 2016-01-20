/**
 * clearObsoleteSequences.js
 *
 * Used internally by the dispatcher: this action tells the triggers reducer that the sequences that have become obsolete
 * should be removed from the state, because another component of the same type has been added to the entity.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Jan 2016
 */
import { CLEAR_OBSOLETE_SEQUENCES } from ".";

export default () => ({
    type: CLEAR_OBSOLETE_SEQUENCES
});
