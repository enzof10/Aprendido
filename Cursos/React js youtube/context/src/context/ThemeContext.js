import { createContext, useState } from "react";

const ThemeContext = createContext();
const  initialTheme="light";

//provedor
const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme=(e)=>{
        setTheme(e.target.value === "light" ? "light" : "dark");
       }

    // por cada propiedad son cada valor para compartir 
    const compartirData = {theme, handleTheme};
    return(
        // envuelve a todos los hijos que se necesita
        <ThemeContext.Provider value={compartirData}>{children}</ThemeContext.Provider>
    )
}



// internamente tiene un provedor y un consumidor
// se suele exportar por default
export{ThemeProvider};
export default ThemeContext;