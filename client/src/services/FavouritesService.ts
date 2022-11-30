import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IFav } from "../models/favourites"

export const favouritesAPI = createApi({
  reducerPath: 'favourites/api',
  tagTypes: ['Repos'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002/'
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
      query: body => ({
        url: 'favourites',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Repos']
    }),
    removeRepo: build.mutation<{id: number}, number>({
      query: id => ({
        url: `favourites/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Repos']
    }),
    removeAll: build.mutation<IFav[], void>({
      query: () => ({
        url: `favourites`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Repos']
    }),
    editRepo: build.mutation<IFav, Partial<IFav>>({
      query: body => ({
        url: `favourites/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Repos']
    })
  })
})