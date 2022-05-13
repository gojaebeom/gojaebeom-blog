import { configureStore } from "@reduxjs/toolkit";
import document from "./modules/document";
import ui from "./modules/ui";

const store = configureStore({
  reducer: {
    document: document,
    ui: ui,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
