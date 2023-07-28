import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {clothesReducer} from "./slices/ClothesSlice";
import {userReducer} from "./slices/UsersSlice";
import {commentsReducer} from "./slices/CommentsSlice";

const rootReducer = combineReducers({
    clothes:clothesReducer,
    user:userReducer,
    comments:commentsReducer
})

const setupStore=() => configureStore({
    reducer:rootReducer
})

export {setupStore}
