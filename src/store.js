import { combineReducers, createStore } from "@reduxjs/toolkit";
import questionsReducer from "./slices/questionsSlice";
import userReducer from "./slices/activeUserSlice";

const reducer = combineReducers({
  activeQuestion: questionsReducer,
  activeUser: userReducer,
});

const store = createStore(reducer);

export default store;
