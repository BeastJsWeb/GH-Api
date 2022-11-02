import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { IFav } from "../models/fav"
import { SERVER_API } from "./const"

export const favouritesAPI = createApi({
  reducerPath: 'favourites/api',
  tagTypes: ['Repos'],
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API
  }),
  endpoints: build => ({
    getFavourites: build.query<IFav[], void>({
      query: () => 'favourites',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Repos' as const, id })), 'Repos']
          : ['Repos'],
    }),
    addRepo: build.mutation<IFav, Partial<IFav>>({
      query: (body) => ({
        url: 'favourites',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Repos']
    }),
    removeRepo: build.mutation<{id: number}, number>({
      query: (id) => ({
        url: `favourites/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Repos']
    })
  })
})