import { createStore } from "redux";
import rootReducer from "./reducers";


export default function configureState(initialState) {
    return createStore(rootReducer, initialState)
}