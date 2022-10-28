import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//import { IFav } from "../../models/fav"

export const jsonServerApi = createApi({
  reducerPath: 'jsonServer/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/'
  }),
  endpoints: build => ({
    getFavourites: build.query<string[], void>({
      query: () => 'favourites'
      
    })
  })
})

export const {useGetFavouritesQuery} = jsonServerApi