import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import { fetchReducer } from "./fetchReducer";

export let rootReducer=combineReducers(
    {countReducer,todo:todoReducer,fetch:fetchReducer})