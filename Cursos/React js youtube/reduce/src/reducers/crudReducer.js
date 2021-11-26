import {TYPES} from "../actions/crudActions"

export const crudInitialState={
    db:null
}


export function crudReducer(state, action){
    switch (action.type) {
        case TYPES.READ_ALL_DATA:{
            return{
                ...state,
                db:action.payload.map((caballero)=> caballero)
            }
        }
        case TYPES.CREATE_DATA:{
            return{
                ...state,
                db:[...state.db, action.payload]
            }
        }
        case TYPES.UPDATE_DATA:{
            let newData = state.db.map((caballero)=>
             caballero.id === action.payload.id ?
              action.payload : caballero );
            return{
                ...state,
                db: newData
            }

        }
        case TYPES.DELETE_DATA:{
            // filtra el elemento y compara con el action.payload osea el id
            let newData = state.db.filter((el)=> el.id !== action.payload);
            return{
                ...state,
                db: newData
            }
        }
        case TYPES.NO_DATA:{
            return crudInitialState;
        }
        default:
            return state;
    }
}