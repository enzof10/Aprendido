import {createContext, useState} from "react"

const AuthContext = createContext();
const initialAuth = null;


const AuthProvider=({children})=>{
    const [auth, setAuth] = useState(initialAuth);
    const handleAuth=()=>{
        console.log(auth)
        if(auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
        console.log(auth)
    }
    const dataCompartir={auth, handleAuth}

    return <AuthContext.Provider value={dataCompartir}>{children}</AuthContext.Provider>
}


export {AuthProvider}
export default AuthContext;