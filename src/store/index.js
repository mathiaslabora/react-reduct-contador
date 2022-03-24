
import {createStore, combineReducers} from "redux";
import reducers from "../reducers";


const combinacionreducers = combineReducers({
    reducers,
})

const store = createStore(combinacionreducers)

export  default store;