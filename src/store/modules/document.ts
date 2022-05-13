import { createSlice } from "@reduxjs/toolkit";
import { DocumentState } from "types";

export const documentState = createSlice({
  name: "documentState",
  initialState: <DocumentState>{
    documentList: [],
    documentDetail: null,
  },
  reducers: {
    setDocumentList: (state, action) => {
      const documents = action.payload.documents;
      state.documentList = documents;
    },
    setDocumentDetail: (state, action) => {
      const document = action.payload.document;
      state.documentDetail = document;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDocumentList, setDocumentDetail } = documentState.actions;

export default documentState.reducer;
