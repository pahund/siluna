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
import { UPDATE } from "../actions";
import init from "../actions/init";

function loggerMiddleware() {
    return next => action => {
        if (action.type !== UPDATE) {
            console.log("dispatching", action);
        }
        return next(action);
    };
}

export default () => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(loggerMiddleware, sagaMiddleware(sagas))
    );
    store.dispatch(init(store.dispatch));
    return store;
}
