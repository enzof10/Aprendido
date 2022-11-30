// ESTA ES LA Function REDUCTORA
import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

const initialState = 0;
// RECIBE EL ESTADO QUE ES LO QUE PRETENDE ACTUALIZAR Y LA ACCION A EJECUTAR
export default function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT_5:
      return state - action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
