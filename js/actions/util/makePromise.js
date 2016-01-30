/**
 * makePromise.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jan 2016
 */

export default (type, args) => {
    let resolve = null;
    const promise = new Promise(res => resolve = () => res("done"));
    promise.catch(error => {
        console.error(`Error executing action ${type} with arguments (${args.join(", ")}!`);
        console.log(`Message: ${error.message}`);
        console.log(`Name: ${error.name}`);
        console.log(`File name: ${error.fileName}`);
        console.log(`Line number: ${error.lineNumber}`);
        throw error;
    });
    return [ promise, resolve ];
}

