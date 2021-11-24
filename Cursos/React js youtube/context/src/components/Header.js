const Header = ({theme, handleTheme}) => {
    return (
        <div>
            <header className={theme}>
                <h2>Mi aplicacion SIN context API</h2>
                <h3>Mi cabecera</h3>
                <select name="language">
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <input 
                type="radio" 
                name="theme" 
                id="light" 
                onClick={handleTheme}
                value="light"
                />
                <label htmlFor="light">Claro</label>
                <input 
                type="radio" 
                name="theme" 
                id="dark" 
                onClick={handleTheme}
                value="dark"
                />
                <label htmlFor="dark">OScuro</label>
                <button>Iniciar sesion</button>
            </header>
        </div>
    )
}

export default Header

