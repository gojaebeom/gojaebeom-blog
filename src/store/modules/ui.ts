import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "types";

const uiState = createSlice({
  name: "uiState",
  initialState: <UiState>{
    categoryBoxOpen: false,
    modal: {
      name: null,
      open: false,
    },
  },
  reducers: {
    toggleCategoryBox: (state) => {
      state.categoryBoxOpen = !state.categoryBoxOpen;
    },
    openModal: (state, action) => {
      const name = action.payload;
      state.modal = {
        name: name,
        open: true,
      };
    },
    closeModal: (state) => {
      state.modal = {
        name: null,
        open: false,
      };
    },
  },
});

export const { toggleCategoryBox, openModal } = uiState.actions;

export default uiState.reducer;
