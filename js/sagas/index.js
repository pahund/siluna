/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 20 Jan 2016
 */
import { fork } from "redux-saga";
import triggers from "./triggers";

export default function *(getState) {
    yield fork(triggers, getState);
}
