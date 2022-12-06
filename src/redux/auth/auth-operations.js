import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8800"


const tokenAuth = {
    set(token) {
        axios.defaults.headers.common.Authorization = token
        console.log('sdfssadfsde',token);
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const signUp = createAsyncThunk("auth/register", async (credantials) => {
    try {
        const { data } = await axios.post("/auth/signup", credantials)
        // console.log(data);

        return data

    } catch (error) {
        console.log(error);
    }
})

export const logIn = createAsyncThunk("auth/login", async (credantials) => {
    console.log(credantials);
    try {
        const { data } = await axios.post("/auth/login", credantials)
console.log(data.token);
        tokenAuth.set(data.token)

        return data
    } catch (error) {
        console.log(error);
    }
})

export const logOut = createAsyncThunk("/auth/loguot", async () => {
    try {
        // await axios.post("users/logout")
        tokenAuth.unset()

    } catch (error) {
        console.log(error);
    }
})



// export const getRefresh = createAsyncThunk(
//     'auth/refresh', async (_, { getState, rejectWithValue }) => {
//         const state = getState()
//         const tokenLS = state.auth.token
//         if (!tokenLS) {
//             return rejectWithValue('ops')
//         }
//         try {
//             tokenAuth.set(tokenLS)
//             const { data } = await axios.get('users/current')
//             return data

//         } catch (error) {
//             console.log(error);
//         }
//     }
// )