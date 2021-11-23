import {memo, useMemo} from "react" 

const ContadorHijo = ({contador, sumar, restar}) => {
    // let superNumero = 0;
    // for(let i = 0; i < 100000000; i ++){
    //     superNumero ++
    // }
    // para memorizar un valor, no se renderiza junto con el componente
    const superNumero = useMemo(() => {
     let numero = 0;
    for(let i = 0; i < 1000000; i ++){
        numero ++
    }

    return numero
    },[])
    console.log("hijo contador se renderiza")
    return (
        <div style={{border:"thin-solid #000", margin:"1rem", padding:"1rem"}}>
            <h2>Hijo del contador</h2>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{superNumero}</h3>
        </div>
    )
}
// la memorizacion la estoy haciendo en el momento que lo exporto
export default memo(ContadorHijo)
