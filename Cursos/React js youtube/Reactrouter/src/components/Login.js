import { Navigate } from "react-router";
import Dashboard from "./Dashboard";

const Login = ({children}) => {
    let auth = false;

    console.log(children)
    return (
        <div>
           {auth ? <Dashboard/> : <Navigate  />}
        </div>
    )
}

export default Login
