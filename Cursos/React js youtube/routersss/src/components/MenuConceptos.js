import { Link, NavLink } from "react-router-dom"

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Meenu con enlaces HTML(no recomendado)</span>
                    <a href="/">Home</a>
                    <a href="/acerca">Acerca</a>
                    <a href="/contacto">Contacto</a>
                </li>
                <li>
                    <span>Componente LINK</span>
                    <Link to="/">Home</Link>
                    <Link to="/acerca">acerca</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/no-existe">Error 404</Link>
                </li>
                <li>
                    <span>Componente Navlink</span>
                    <NavLink to="/" activeclassname="active">Homme</NavLink>
                    <NavLink to="/acerca" activeclassname="active">Acerca</NavLink>
                    <NavLink to="/contacto" activeclassname="active">Contacto</NavLink>
                    <NavLink to="/no-existe" activeclassname="active">Error 404</NavLink>
                 
                </li>
                <li>
                    <span>Parametros: </span>
                    <Link to="/usuario/enzofrias">Enzo yop</Link>
                    <Link to="/usuario/branka">Branka</Link>
                </li>
                <li>
                    <span>Parametros de consulta</span>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <span>Redirecciones</span>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <span>Rutas Anidadas: </span>
                    <Link to="/react">React</Link>
                </li>
                <li>
                    <span>Rutas privadas</span>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ol>
        </nav>
    )
}

export default MenuConceptos
