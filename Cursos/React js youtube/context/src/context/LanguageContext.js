import { createContext, useState } from "react";

const LanguageContext = createContext();
const initialLanguage="es";
const translations ={
    es:{
        headerTitle:"Mi aplicacion CON context",
        headerSubtitle:"Mi cabecera",
        headerDark:"Oscuro",
        headerLight:"Claro",
        buttonLogin:"Iniciar Sesion",
        buttonLogout:"Cerrar Sesion",
        mainWelcome:"Bienvenid@ invitad@",
        mainHello:"Hola Usuari@",
        mainContent:"Mi contenido principal",

        footerTitle:"Mi pie de pagina"
    },
    en:{
        headerTitle: "My application WITH context API",
         headerSubtitle: "My header",
         headerDark: "Dark",
         headerLight: "Sure",
         buttonLogin: "Login",
         buttonLogout: "Close Session",
         mainWelcome: "Welcome guest",
         mainHello: "Hello User @",
         mainContent: "My main content",
         footerTitle: "My footer"
        }
    }

const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage=(e)=>{
        const langua =  e.target.value === "es" ? "es" : "en";
        setTexts(translations[langua])
        setLanguage(langua)
    }

    const dataCompartir ={
        language, 
        setLanguage, 
        texts, 
        setTexts,
        handleLanguage
    }
    return(
        <LanguageContext.Provider value={dataCompartir}>{children}</LanguageContext.Provider>
    )
}

export {LanguageProvider}
export default LanguageContext;