import React from "react";
import { Navigate, Outlet} from "react-router-dom";

import { getToken } from "service";

type PrivateProps = {
  nested?: any
}

export const PrivateRoutes:React.FC <PrivateProps> = () => {
  
    //How to get request.headers vlaue in React JS
    let token = getToken();
    return(
        token === null || token === undefined
        ?
        <Navigate to="/login" />
        : 
        <Outlet/>
    )
}