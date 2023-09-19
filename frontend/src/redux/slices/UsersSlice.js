import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services/users.service";


const initialState={
    user:[],
    userInfo:null,
    avatar:null
}

const getUser = createAsyncThunk(
    'userSlice/getUser',
    async (_,{rejectWithValue})=> {
        try {
            const {data} = await usersService.getAll()
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getOwnInfo = createAsyncThunk(
    'userSlice/getOwnInfo',
    async ({_id},thunkAPI)=> {
        try {
            const {data} = await usersService.getOwnInfo(_id)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const putAvatar = createAsyncThunk(
    'userSlice/putAvatar',
    async ({avatar,id},thunkAPI)=> {
        try {
            const {data} = await usersService.putAvatar(avatar,id)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteAvatar = createAsyncThunk(
    'userSlice/deleteAvatar',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await usersService.deleteAvatar(id)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    extraReducers:{
        [getUser.fulfilled]:(state,action)=> {
            state.user = action.payload;
        },
        [getOwnInfo.fulfilled]:(state,action)=> {
            state.userInfo = action.payload;
        },
        [putAvatar.fulfilled]:(state,action)=> {
            state.avatar = action.payload;
        }
    }
})

const {reducer:userReducer} = userSlice;

const userActions ={
    getUser,getOwnInfo,putAvatar,deleteAvatar
}

export {userReducer,userActions}
