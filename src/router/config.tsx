import {Home,About,Dashboard,Profile,Login,Register,VerifyCom} from '../screen'

import { Contact } from '../screen/contact/contact';


export const pageRoutes = [
  {
    path:"/",
    element: <Home />,
    protect:true,
    nested:[
      {
        path:"dashboard",
        element:<Dashboard />
      },
    ]
  },
  {
    path:"/login",
    element: <Login />,
    nested: null,
    protect: false
  },
  {
    path:"/register",
    element:<Register />,
    nested: null,
    protect:false,
  },
  {
    path:"/verify",
    element:<VerifyCom />,
    nested: null,
    protect:false
  },
  {
    path:"/about",
    element: <About />,
    protect:false,
    nested: null
    
  },
  {
    path:"/contact",
    element:<Contact />,
    nested:[
      {
        path:"profile",
        element:<Profile />
      },
    ]
  },
];