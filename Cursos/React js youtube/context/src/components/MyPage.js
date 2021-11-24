import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const  initialTheme="light";
const initialLanguage="es"
const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage),
    const [texts, setTexts] = useState(translations[language])

    const tranlations ={
        es:{
            headerTitle:"Mi aplicacion sin context",
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
            headerTitle: "My application without context API",
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

    const handleTheme=(e)=>{
     setTheme(e.target.value === "light" ? "light" : "dark");
    }
    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme}/>
            <Main theme={theme} />
            <Footer theme={theme} />

        </div>
    )
}

export default MyPage
