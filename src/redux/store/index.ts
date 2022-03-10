import { composeWithDevTools } from "@redux-devtools/extension";
import { AnyAction, applyMiddleware, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default store;
