import { useReducer} from "react"
import  {TYPES} from "../actions/contadorActions";
import {contadorReducer, 
    contadorInitialState, 
    contadorInit} from "../reducers/contadorReducer";






const ContadorMejorado = () => {
    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

    const sumar =()=>{dispatch({type:TYPES.INCREMENT})};
    const sumar4 =()=>dispatch({type:TYPES.INCREMENT_4, payload:4});
    const restar =()=>{dispatch({type:TYPES.DECREMENT})};
    const restar4 =()=>{dispatch({type:TYPES.DECREMENT_4, payload:4})};
    const reset =()=>{dispatch({type: TYPES.RESET})};
    return (
        <div>
            <h2>ContadorMejorado Reducer</h2>
            <nav>
                <button onClick={sumar4}>+4</button>
                <button onClick={sumar}>+</button>
                <button onClick={reset}>0</button>
                <button onClick={restar}>-</button>
                <button onClick={restar4}>-4</button>
            </nav>
            <h3>{state.count}</h3>
        </div>
    )
}

export default ContadorMejorado
