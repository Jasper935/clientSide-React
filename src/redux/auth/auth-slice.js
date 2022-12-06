import { createSlice } from "@reduxjs/toolkit";
import {  logIn, logOut, signUp } from "./auth-operations";

const initialState = {
    
        
        email: '',
    message:null,
    token: null,
    status:0,
    isLogin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled]: (state, { payload }) => {
            state.token = payload.token
            state.isLogin = true
            state.status = payload.status
        },
        [logIn.fulfilled]: (state, { payload }) => {
            state.token = payload.token
            state.isLogin = true
            state.user = payload.user
            state.email=payload.email
              state.message=payload.message
              state.status = payload.status
            console.log(payload);
        },
        
        [logOut.fulfilled]: (state, ) => {
            state.token = null
            state.isLogin = false;
            state.user = {
                name: '',
                email: ''
            };
            state.status = 0
            state.message=null
        },
        
        
        
    }
})

export default authSlice.reducer
export const {setMessage} =authSlice.actions