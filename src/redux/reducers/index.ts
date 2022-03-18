import { combineReducers } from "redux";
import spotsReducer from "./spotsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  spots: spotsReducer,
  user: usersReducer,
});

export default rootReducer;
