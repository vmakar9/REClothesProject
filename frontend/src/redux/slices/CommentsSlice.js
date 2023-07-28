import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services/comments.service";

const initialState={
    comments:[]
}

const getAllComments=createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_,{rejectWithValue})=> {
        try {
            const {data} = await commentsService.getAll();
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const commentsSlice=createSlice({
    name:"commentsSlice",
    initialState,
    extraReducers:{
        [getAllComments.fulfilled]:(state,action)=> {
            state.comments = action.payload;
        }
    }
})

const {reducer:commentsReducer}= commentsSlice;

const commentsActions={
    getAllComments
}

export {
    commentsActions,commentsReducer
}