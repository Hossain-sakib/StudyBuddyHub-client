import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {Navigate , useLocation} from "react-router"



const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();



    if(loading){
        return <progress className="progress w-56"></progress>;
    }

    if(user?.email)
    {
        return children;
    }

    return <Navigate state={location.pathname} to='/signin' replace></Navigate>
    
}
 

export default PrivateRoute;