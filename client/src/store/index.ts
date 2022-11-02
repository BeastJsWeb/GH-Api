import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { githubReducer } from "./github/github.slice";
import { gitHubAPI } from "../services/gitHubService";
import { favouritesAPI } from "../services/FavouritesService";

export const store = configureStore({
  reducer: {
    [gitHubAPI.reducerPath]: gitHubAPI.reducer,
    [favouritesAPI.reducerPath]: favouritesAPI.reducer,
    github: githubReducer 
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
  .concat(gitHubAPI.middleware)
  .concat(favouritesAPI.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>