import {Route} from "react-router"

const PrivateRoute = (props) => {
    return (
        <div>
            <Route path={props} />
        </div>
    )
}

export default PrivateRoute
