/**
 * debug.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Feb 2016
 */
import { DEBUG } from "../actions";
import { take } from "redux-saga/effects";

export default function *() {
    while (true) {
        const { args } = yield take(DEBUG);
        console.log(...args.slice(0, args.length - 1));
    }
}

