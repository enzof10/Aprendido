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
import PrivateRoute from "./PrivateRoute"
import Productos from "./Productos"
import ReactTopics from "./ReactTopics"
import Usuario from "./Usuario"
import {HashRouter, Link} from "react-router-dom"
// lo que haces es mostrat un contenido dependiendo de la ruta
const ConceptosBasicos = () => {
    let algo = true
    return (
        <div>
            <h2>Hash Router</h2>
            <HashRouter>
                <nav>           
                    <Link to="/">Hoooome</Link>
                    <Link to="/acerca">Aceeeerca</Link>
                    <Link to="/contacto">Contaaaaacto</Link>
                </nav>
                <Routes>
                <Route path="/"  element={<Inicio/>} />
                <Route  path="/acerca" element={<Acerca/>} />
                <Route path="/contacto" element={<Contacto/>} />
                </Routes>
            </HashRouter>
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
                    </Route>
                    <Route path="/contact" element={<><Navigate to="/acerca"/></>} >
                    </Route>
                    <Route path="react/*" element={<ReactTopics/>} />
                    <Route path="login/*" element={ 
                        <Login>
                            <Dashboard></Dashboard>
                        </Login>
                    } >

                    </Route>
                    {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ConceptosBasicos
