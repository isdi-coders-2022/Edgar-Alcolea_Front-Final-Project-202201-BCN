import { combineReducers } from "redux";
import spotsReducer from "./spotsReducer";

const rootReducer = combineReducers({ spots: spotsReducer });

export default rootReducer;
