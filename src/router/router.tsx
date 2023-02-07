import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { PublicRoutes } from 'utils'
import { PrivateRoutes } from 'utils/PrivateRoutes'
import {pageRoutes} from './config'


export const RouteCom:React.FC = () => {
  return(
    <>
      {
        pageRoutes?.map(({path,element,protect,nested} : any,i:number)=>(
            <Routes
            key={i}
            >
              {
                protect ? 
                <Route element={<PrivateRoutes />}>
                   <Route element={element} path={path}>
                      {
                        nested && nested?.map((data:any,index:  number) => (
                          <Route element={data.element} path={data.path} key={index} />
                        ))
                      }
                    </Route>
                </Route> 
                : 
                <Route element={<PublicRoutes />}>
                   <Route element={element} path={path}>
                      {
                        nested && nested?.map((data:any,index: number) => (
                          <Route element={data.element} path={data.path} key={index} />
                        ))
                      }
                    </Route>
                </Route>
              }
            </Routes>
        ))
      }
    </>
  )
}