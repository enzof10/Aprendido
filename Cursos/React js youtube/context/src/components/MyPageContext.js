import { useState } from "react"
import  { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContex from "./FooterContext"
import HeaderContext from "./HeaderContext"
import MainContext from "./MainContext"


    const initialAuth = null;

const MyPageContext = () => {

    const [auth, setAuth] = useState(initialAuth)
    

    const handleAuth=()=>{
        console.log(auth)
        if(auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
        console.log(auth)

    }
    return (
        <div className="my-page">
            <ThemeProvider>
            <LanguageProvider>
            <HeaderContext 
            auth={auth}

            handleAuth={handleAuth}
            /> 
            <MainContext  auth={auth} />
            <FooterContex />
            </LanguageProvider>
            </ThemeProvider>
        </div>
    )
}

export default MyPageContext