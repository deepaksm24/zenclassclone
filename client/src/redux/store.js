import {configureStore} from "@reduxjs/toolkit"
import loadersReducer from "./loadersSlice"
import usersReducer from "./usersSlice"
import users1Reducer from "./users1Slice"


const store = configureStore({
  
    reducer:{
        loaders: loadersReducer,
        users: usersReducer,
        users1:users1Reducer,
    }
});

export default store;