import { login_auth,register_auth,google_auth,changeStatus } from "store/auth";

import { useSelector,useDispatch } from "react-redux";

export const useAuth = () => {
  const userData = useSelector((state: any) => state.auth.userData);
  const dispatch = useDispatch<any>();
  return {
    userData,
    dispatch,
    login_auth,
    register_auth,
    google_auth,
    changeStatus,
  }
}