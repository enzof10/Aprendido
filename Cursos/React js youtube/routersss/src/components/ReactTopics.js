import { Link, Routes, Route, useParams } from "react-router-dom"

const Topic=()=>{
    // va a esxtraer el parametro topic de useParams
    // que viene de la  url
     let {topic} = useParams();

     return(
         <div>
             <h4>{topic}</h4>
             <p>Loremp ipsun bla bla</p>
         </div>
     )
}

const ReactTopics = () => {
    return (
        // url para los links o navlinks, path para las rutas
        <div>
            <h2>Temas de React</h2>
            <ul>
                <li>
                    <Link to="jsx">JSX</Link>
                </li>
                <li>
                    <Link to="props">Props</Link>
                </li>
                <li>
                    <Link to="estado">Estado</Link>
                </li>
                <li>
                    <Link to="componentes">Componentes</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<><h4>Elige un tema de react </h4></>} />
                <Route path=":topic" element={<Topic/>} />
            </Routes>
        </div>
    )
}

export default ReactTopics
