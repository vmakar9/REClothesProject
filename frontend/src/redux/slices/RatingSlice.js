import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ratingService} from "../../services/rating.service";

const initialState={
    ratings:[],
    ownRating:null
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

const getOwnRatings = createAsyncThunk(
    'ratingSlice/getOwnRatings',
    async ({_id},thunkAPI)=> {
        try {
            const {data} = await ratingService.getOwnRating(_id)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const postRating = createAsyncThunk(
    'ratingSlice/postRating',
    async ({data,userId},thunkAPI)=>{
        try {
            const {res} = ratingService.postRating(data,userId)
            return res
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const ratingSlice = createSlice({
    name:'ratingSlice',
    initialState,
    extraReducers:{
        [getRatings.fulfilled]:(state,action)=> {
            state.ratings = action.payload
        },
        [getOwnRatings.fulfilled]:(state,action)=> {
            state.ownRating = action.payload
        }
    }
})

const {reducer:ratingReducer} = ratingSlice;

const ratingActions={
    getRatings,getOwnRatings,postRating
}

export {ratingActions,ratingReducer}

