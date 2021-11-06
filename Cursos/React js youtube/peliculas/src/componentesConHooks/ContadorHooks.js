import React, {useState} from 'react';
// componente con estado pero funcional
export default function ContadorHooks(props){
    const [contador, setContador] = useState(0);
    // lo ideal es que por cada estado se use el useState

    const sumar =()=>setContador(contador + 1)
    const restar =()=>setContador(contador - 1)
    return(
        <>
        <h2>Hooks-useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            {/* se sugiere trabajar las funciones en formato de valor expresdad
            como arrow function */}
            <button onClick={restar}>-</button>
        </nav>
        <p>Contador de {props.titulo}</p>
        {/* no necesito usar mas la palabra this.state para hacer referencia aca */}
        <h3>{contador}</h3>
        </>
    )
}
// aca le paso una `rpiedad por defecto que se renderiza si no tiene un titulo 
// definido desde donde mando a llamar el componente`
ContadorHooks.defaultProps={
    titulo:"Clicks",
}
