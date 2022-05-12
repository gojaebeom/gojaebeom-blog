import { createSlice } from "@reduxjs/toolkit";
import { Toggle } from "types";

export const categoryBoxToggle = createSlice({
  name: "categoryBoxToggle",
  initialState: <Toggle>{
    activite: false,
  },
  reducers: {
    toggle: (state) => {
      state.activite = !state.activite;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = categoryBoxToggle.actions;

export default categoryBoxToggle.reducer;
