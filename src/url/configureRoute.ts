import axios from "axios";
import queryString from "query-string";
import { configUrl } from "./configUrl";


export const routeFilter = (params:any) => {
    let str = queryString.stringify(params)
    return str !== '' ? `?${str}` : str
}

export const routeHandle = async(endpoint: any,data: any) => {
  let tmp = endpoint.split(":");
  if(data.profileImg){
    return await axios({
      method:tmp[0],
      url:`${configUrl.domain}${tmp[1]}`,
      headers: {
        'Content-Type': "multipart/form-data"
      },
      data
    })
  }
  else {
    return await axios({
      method:tmp[0],
      url:`${configUrl.domain}${tmp[1]}`,
      data
    })
  }
}



