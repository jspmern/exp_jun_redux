import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";

export let rootReducer=combineReducers(
    {countReducer,todo:todoReducer})