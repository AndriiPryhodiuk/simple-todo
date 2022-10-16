import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosReducer from "./todos";

const reducer = combineReducers({
    todosReducer,
});
const store = configureStore({
    reducer,
});
export default store;
