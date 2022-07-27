import { createStore } from "redux";
import reducer from "../reducers";


const store = createStore(reducer);

store.subscribe(()=> (store));

export default store;