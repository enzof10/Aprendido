// LAS FUNCIONES QUE VANA  AHACER REFERENCIA A CADA UNO DE ESOS TIPOS DE ACCIONES
// QUE HEMOS DEFINIDO
import {
  DECREMENT_5,
  RESET,
  INCREMENT_5,
  DECREMENT,
  INCREMENT,
} from "../types";

export const sumar = () => ({ type: INCREMENT });

export const restar = () => ({ type: DECREMENT });

export const sumar5 = () => ({ type: INCREMENT_5, payload: 5 });

export const restar5 = () => ({ type: DECREMENT_5, payload: 5 });

export const reset = () => ({ type: RESET });
