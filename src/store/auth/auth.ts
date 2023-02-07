import { routeHandle, routeFilter } from "../../url/configureRoute";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { api } from "url/routes";
import type { PayloadAction } from "@reduxjs/toolkit";
import { setToken } from "service";

interface ResDataType {
  res: any;
}

export const login_auth = createAsyncThunk("login_auth", async (data: any) => {
  try {
    let response = await routeHandle(api.login, data);
    if(response?.data) {
      if(response?.data?.status === true) {
          setToken(response?.data?.message);
      }
    }
    return response.data;
  } catch (error: any) {
    console.log("Error is", error);
    return error;
  }
});


export const register_auth = createAsyncThunk(
  "register_auth",
  async (data: any) => {
    try {
      let response = await routeHandle(api.register, data);
      console.log("What is response" , response);
      return response.data;
    } catch (error: any) {
      console.log("Error is", error);
    }
  }
);

export const google_auth = createAsyncThunk(
  "google_auth",
  async (data:any) => {
    try {
        let response = await routeHandle(api.google_login,data);
        if(response?.data) {
          if(response?.data?.status === true) {
              setToken(response?.data?.message);
          }
        }
        return response?.data;
    } catch (error) {
        console.log("Google login error is" , error);
    }
  }
)

const authSlice = createSlice({
  name: "auth_slice",
  initialState: {
    isLoading: "",
    userData:{
      message:"",
      status: false
    }
  },
  reducers: {
    changeStatus:(state: any) => {
        state.userData.status = false;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(login_auth.pending, register_auth.pending,google_auth.pending),
      (state: any) => {
        return { ...state};
      }
    );
    builder.addMatcher(
      isAnyOf(login_auth.fulfilled),
      (state: any, {payload}: PayloadAction<any>) => {
        return { ...state, token: payload.message};
      }
    );
    builder.addMatcher(
      isAnyOf(register_auth.fulfilled),
      (state: any, { payload }: PayloadAction<any>) => {
        console.log("Auth.ts Redux register Response data is", payload)
        return { ...state, userData: payload };
      }
    );
    builder.addMatcher(
      isAnyOf(google_auth.fulfilled),
      (state: any, action) => {
        setToken(action.payload);
        return { ...state, token: action.payload,isLoading: true};
      }
    );
    builder.addMatcher(
      isAnyOf(login_auth.rejected, register_auth.rejected,google_auth.rejected),
      (state: any, action: any) => {
        return { ...state,token: action.payload};
      }
    );
  },
});

export const authReducer = authSlice.reducer;
export const changeStatus = authSlice.actions.changeStatus;
