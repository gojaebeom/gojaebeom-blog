import { configureStore } from "@reduxjs/toolkit";
import categoryBoxToggle from "./modules/toggle";
import markdown from "./modules/markdown";

const store = configureStore({
  reducer: {
    categoryBoxToggle: categoryBoxToggle,
    markdown: markdown,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
