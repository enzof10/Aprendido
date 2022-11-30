import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export const crudInitialState = {
  db: [],
};

export function crudReducer(state = crudInitialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((caballero) => caballero),
      };
    }
    case CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      let newData = state.db.map((caballero) =>
        caballero.id === action.payload.id ? action.payload : caballero
      );
      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      // filtra el elemento y compara con el action.payload osea el id
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case NO_DATA: {
      return crudInitialState;
    }
    default:
      return state;
  }
}
