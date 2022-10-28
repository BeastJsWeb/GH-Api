import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { githubApi } from "./github/github.api";
import { githubReducer } from "./github/github.slice";
import { jsonServerApi } from "./json-server/jsonServer.api";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    [jsonServerApi.reducerPath]: jsonServerApi.reducer,
    github: githubReducer 
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
  .concat(githubApi.middleware)
  .concat(jsonServerApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>