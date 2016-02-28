/**
 * loggerFactory.js
 *
 * Creates a logging function that writes a message to the console log together with two timestamps:
 * - first timestamp if the ms elapsed since the instantiation of the logging function
 * - second timestamp is the ms elapsed since the previous logging function invocation
 * Each message is logged only once, subsequent calls with the same message are ignored.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 28 Feb 2016
 */
export default () => {
    let timer = Date.now(),
        prevTime = timer,
        messages = new Set();
    return message => {
        if (!messages.has(message)) {
            const time = Date.now();
            console.log(message, time - timer, time - prevTime);
            messages.add(message);
            prevTime = time;
        }
    }
}

