import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Navigate}
     from "react-router-dom"
import Acerca from "./Acerca"
import Contacto from "./Contacto"
import Dashboard from "./Dashboard"
import Error404 from "./Error404"
import Inicio from "./Inicio"
import Login from "./Login"
import MenuConceptos from "./MenuConceptos"
import Productos from "./Productos"
import ReactTopics from "./ReactTopics"
import Usuario from "./Usuario"
// lo que haces es mostrat un contenido dependiendo de la ruta
const ConceptosBasicos = () => {
    let algo = true
    return (
        <div>
            <h2>Conceptos Basicos</h2>
            {/* desde las mas especificas a las mas genericas */}
            <BrowserRouter>
            <MenuConceptos/> 
                <Routes>
                    <Route path="*" element={<Error404/>} />
                    <Route path="/"  element={<Inicio/>} />
                    <Route  path="/acerca" element={<Acerca/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/usuario/:username" element={<Usuario/>} />
                    <Route path="/productos" element={<Productos/>} />
                    <Route path="/about" element={algo ? (<><Navigate to="/acerca"/></>) : (<Error404/>)}>
                        {/* <h3>About</h3> */}
                    </Route>
                    <Route path="/contact" element={<><Navigate to="/acerca"/></>} >
                        {/* <h3>Contact</h3> */}
                    </Route>
                    <Route path="react/*" element={<ReactTopics/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ConceptosBasicos