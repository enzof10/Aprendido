import  {TYPES} from "../actions/contadorActions"
export const contadorInitialState ={ count :0 };

export const contadorInit =(contadorInitialState)=>{
    return{
        count: contadorInitialState.count + 100
    }
}
export function contadorReducer(state, action){
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
            return {count: contadorInitialState.count}
        default:
            return state;
        }
}