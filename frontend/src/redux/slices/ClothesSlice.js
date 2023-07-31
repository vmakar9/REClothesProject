import {clothesService} from "../../services/clothes.service";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState={
    clothes:[],
    clothesDetails:null,
    prev:null,
    next:null
}

const getAll = createAsyncThunk(
    'clothesSlice/getAll',
    async ({page},{rejectWithValue})=>  {
        try {
            const {data} = await clothesService.getAll(page)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'clothesSlice/getById',
    async ({_id},{rejectWithValue})=> {
        try {
            const {data} = await clothesService.getById(_id);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const clothesSlice= createSlice({
    name:"clothesSlice",
    initialState,
    extraReducers:{
        [getAll.fulfilled]:(state,action)=> {
            state.clothes = action.payload
            state.prev = action.payload
            state.next = action.payload
        },
        [getById.fulfilled]:(state,action)=> {
            state.clothesDetails = action.payload;
        }
    }
})

const {reducer:clothesReducer}=clothesSlice;

const clothesActions={
    getAll,getById
}

export {clothesActions,clothesReducer}
