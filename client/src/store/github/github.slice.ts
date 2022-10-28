import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const FAV_KEY = 'fk'

interface githubState {
  favourites: string[]
}

const initialState: githubState = {
  favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite (state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite (state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(fav => fav !== action.payload)
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
    }
  }
})

export const githubActions = githubSlice.actions

export const githubReducer =  githubSlice.reducer