import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {clothesReducer} from "./slices/ClothesSlice";
import {userReducer} from "./slices/UsersSlice";
import {commentsReducer} from "./slices/CommentsSlice";
import {ratingReducer} from "./slices/RatingSlice";

const rootReducer = combineReducers({
    clothes:clothesReducer,
    user:userReducer,
    comments:commentsReducer,
    ratings:ratingReducer
})

const setupStore=() => configureStore({
    reducer:rootReducer
})

export {setupStore}
