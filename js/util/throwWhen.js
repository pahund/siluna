/**
 * throwWhen.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 30 Dec 2015
 */
export default (predf, message = "error") => func => (...args) => {
    if (predf(...args)) {
        throw new Error(message);
    }
    return func(...args);
};
