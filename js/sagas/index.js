/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import { fork } from "redux-saga/effects";
import triggers from "./triggers";
import debug from "./debug";

export default function *(getState) {
    yield fork(triggers, getState);
    yield fork(debug);
}
