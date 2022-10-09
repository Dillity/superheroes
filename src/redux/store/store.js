import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import superheroesReducer from "../superheroes/superheroesReducer";

let reducers = combineReducers({
    superheroes: superheroesReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;


export default store;