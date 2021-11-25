import { useContext } from "react"
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext"
import ThemeContext from "../context/ThemeContext"

const FooterContex = () => {
    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguageContext);
    const {auth} = useContext(AuthContext)



    return (
            <footer className={theme}>
                <h4>{texts.footerTitle}</h4>
            </footer>
        )
}


export default FooterContex
