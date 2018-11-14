import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import trello from "./reducers/trelloReducer"

export default createStore(
    combineReducers({
		math,
		user,
		trello
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);