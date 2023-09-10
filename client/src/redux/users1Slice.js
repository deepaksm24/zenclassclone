
import { createSlice } from "@reduxjs/toolkit";


const user1Slice = createSlice({

    name: "users1",
  
    initialState: {
      user1: null,
    },
    reducers: {
      SetUser1: (state,action) => {
        state.user1 = action.payload;
      }
    }
  });
  
  
  
  export const {SetUser1} = user1Slice.actions;
  export default user1Slice.reducer;