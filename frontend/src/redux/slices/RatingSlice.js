import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ratingService} from "../../services/rating.service";

const initialState={
    ratings:[]
}

const getRatings = createAsyncThunk(
    'ratingSlice/getRatings',
    async (_,{rejectWithValue})=> {
        try {
            const {data} = await ratingService.getRating()
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const ratingSlice = createSlice({
    name:'ratingSlice',
    initialState,
    extraReducers:{
        [getRatings.fulfilled]:(state,action)=> {
            state.ratings = action.payload
        }
    }
})

const {reducer:ratingReducer} = ratingSlice;

const ratingActions={
    getRatings
}

export {ratingActions,ratingReducer}

