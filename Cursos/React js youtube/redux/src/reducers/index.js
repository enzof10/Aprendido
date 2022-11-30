import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./crudReducer";
import {  shoppingReducer } from "./shopingReducer";

const reducer = combineReducers({
    contador: contadorReducer,
    shoping : shoppingReducer,
    crud : crudReducer, 
});

export default reducer;