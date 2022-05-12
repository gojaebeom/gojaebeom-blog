import { createSlice } from "@reduxjs/toolkit";

export const markdowns = createSlice({
  name: "markdowns",
  initialState: {
    markdownLinks: <any>[],
  },
  reducers: {
    setFiles: (state, action) => {
      state.markdownLinks = [...state.markdownLinks, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFiles } = markdowns.actions;

export default markdowns.reducer;
