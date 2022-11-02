import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { GITHUB_API } from './const'
import { ServerResponse, IUser } from '../models/users'
import {IRepo} from '../models/repos'

export const gitHubAPI = createApi({
  reducerPath: 'gitHub/api',
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_API
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`
      })
    })
  })
})