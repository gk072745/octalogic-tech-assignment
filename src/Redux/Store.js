import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/Reducer";
import { reducer as CourseReducer } from "./CourseReducer/Reducer";
import { reducer as StudentReducer } from "./StudentReducer/Reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const rootReducer = combineReducers({
  AuthReducer,
  CourseReducer,
  StudentReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
