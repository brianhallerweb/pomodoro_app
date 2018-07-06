import { createStore, combineReducers } from "redux";
import { workReducer } from "../reducers/workReducer";
import { breakReducer } from "../reducers/breakReducer";
import { timerReducer } from "../reducers/timerReducer";

export const store = createStore(
  combineReducers({
    work: workReducer,
    break: breakReducer,
    timer: timerReducer
  })
);
