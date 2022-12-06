import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getReviews = createAsyncThunk("reviews/get", async (token) => {
    try {
        const { data } = await axios.get("/reviews")


        return data

    } catch (error) {
        console.log(error);
    }
})

export const addReview = createAsyncThunk("/reviews/add", async ({ obj, token }) => {
    console.log(obj, token );
    try {
        const { data } = await axios.post("reviews", obj)

        console.log(data);

        return data
    } catch (error) {
        console.log(error);
    }
})

export const deleteReview = createAsyncThunk("reviews/delete", async (id) => {
    try {
        await axios.delete(`/reviews/:${id}`)
     console.log(`removed ${id}`);
        
    } catch (error) {
        console.log(error);
    }
})
