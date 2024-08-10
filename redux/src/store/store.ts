import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import { jobPosts } from "@/features/jobSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [jobPosts.reducerPath]: jobPosts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobPosts.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
