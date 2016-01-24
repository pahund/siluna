/**
 * makePromise.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jan 2016
 */

export default () => {
    let resolve = null;
    const promise = new Promise(res => resolve = () => res("done"));
    return [ promise, resolve ];
}

