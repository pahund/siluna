/**
 * storeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Dec 2015
 */
import { createStore, applyMiddleware } from "redux";
import sagaMiddleware from "redux-saga";
import sagas from "../sagas";
import initialState from "./initialState";
import reducers from "../reducers";

const createStoreWithSaga = applyMiddleware(
    sagaMiddleware(sagas)
)(createStore);

export default () => createStoreWithSaga(reducers, initialState);

