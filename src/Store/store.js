import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from "../Reducer";
export let store=createStore(rootReducer, composeWithDevTools( ))