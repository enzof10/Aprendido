import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorActions";

const Contador = () => {
  // useSelector es el que me pretmite acceder al estado de redux
  const state = useSelector(state => state)
  //  (state) {contador:0}
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Condator Redux</h1>
      <nav>
          <button onClick={()=>dispatch(sumar5())}>+5</button>
          <button onClick={()=>dispatch(sumar())}>+1</button>
          <button onClick={()=>dispatch(reset())}>0</button>
          <button onClick={()=>dispatch(restar())}>-1</button>
          <button onClick={()=>dispatch(restar5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
