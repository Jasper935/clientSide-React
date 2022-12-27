import { createSlice } from "@reduxjs/toolkit";

import { getReviews, addReview, deleteReview } from "./reviews-operations";
const initialState = {

     reviews:[]
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [getReviews.fulfilled]: (state, { payload }) => {
            // console.log('payload', payload);
            
           state.reviews = payload
        },
        [getReviews.rejected]: (state, { payload }) => {
            console.log(payload);
          
        },
        [addReview.fulfilled]: (state, { payload }) => {
            // console.log('payload', payload);
        //    state.reviews = payload
        },
        [deleteReview.fulfilled]: (state, { payload }) => {
            // console.log('payload', payload);
        //    state.reviews = payload
        },
        

        // [getReviews.fulfilled]: (state, { payload }) => {
        //     state.token = payload.token
            
        //     state.user = payload.user
            
        //       state.message=payload.message
            
        //     console.log(payload);
        // },
        
        
        
    }
})

export default reviewsSlice.reducer