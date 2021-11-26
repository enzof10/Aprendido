import { useReducer} from "react"


// NOS PERMITE USAR UNA FUNCION PURA
// SIGNIFICA QUE NO VA A TENER EFECTOS SECUNDARIOS
// INTERNAMENTE HACE SU PROGRAMACION
// una funcion reductora retorna un estado
const initialState ={ count :0 };

const init =(initialState)=>{
    return{
        count: initialState.count + 100
    }
}
const TYPES={
    INCREMENT:"INCREMENT",
    INCREMENT_4:"INCREMENT_4",
    DECREMENT:"DECREMENT",
    DECREMENT_4:"DECREMENT_4",
    RESET:"RESET"

}
function reducer(state, action){
        switch (action.type) {
        case TYPES.INCREMENT:
            return{count: state.count +1}
        case TYPES.INCREMENT_4:
            return{count: state.count + action.payload}
        case TYPES.DECREMENT:
            return{count: state.count -1}
        case TYPES.DECREMENT_4:
            return{count: state.count - action.payload}
        case TYPES.RESET:
            return {count: initialState.count}
        default:
            return state;
        }
}

const Contador = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState, init);

    const sumar =()=>{dispatch({type:TYPES.INCREMENT})};
    const sumar4 =()=>dispatch({type:TYPES.INCREMENT_4, payload:4});
    const restar =()=>{dispatch({type:TYPES.DECREMENT})};
    const restar4 =()=>{dispatch({type:TYPES.DECREMENT_4, payload:4})};
    const reset =()=>{dispatch({type: TYPES.RESET})};
    return (
        <div>
            <h2>Contador Reducer</h2>
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

export default Contador
