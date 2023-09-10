import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loaders",

  initialState: {
    loading: false,
  },
  reducers: {
    ShowLoading: (state) => {
      state.loading = true;
    },
    Hideloading: (state) => {
      state.loading = false;
    },
  },
});

export const { ShowLoading, Hideloading } = loaderSlice.actions;
export default loaderSlice.reducer;