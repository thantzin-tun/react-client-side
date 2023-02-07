import React from "react";
import { Outlet} from "react-router-dom";

type PublicProps = {
 
}

export const PublicRoutes:React.FC <PublicProps> = () => {
    return(
      <Outlet />
    )
}