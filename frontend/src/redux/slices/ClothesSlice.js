import {clothesService} from "../../services/clothes.service";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState={
    clothes:[],
    allClothes:[],
    prev:null,
    next:null
}

const getWithThePagination = createAsyncThunk(
    'clothesSlice/getWithThePagination',
    async ({page},{rejectWithValue})=>  {
        try {
            const {data} = await clothesService.getWithThePagination(page)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getAll = createAsyncThunk(
    'clothesSlice/getAll',
    async (_,{rejectWithValue})=> {
        try {
            const {data} = await clothesService.getAll();
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
        [getWithThePagination.fulfilled]:(state,action)=> {
            state.clothes = action.payload
            state.prev = action.payload
            state.next = action.payload
        },
        [getAll.fulfilled]:(state,action)=> {
            state.allClothes = action.payload;
        }
    }
})

const {reducer:clothesReducer}=clothesSlice;

const clothesActions={
    getAll,getWithThePagination
}

export {clothesActions,clothesReducer}
