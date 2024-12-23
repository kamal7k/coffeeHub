import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../app/constants/spi_urls";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/users` }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (q) => ({
        url: '/login',
        body: q,
        method: 'POST'
      })
    }),

    registerUser: builder.mutation({
      query: (q) => ({
        url: '/register',
        body: q,
        method: 'POST'
      })
    })
  })
})


export const { useLoginUserMutation, useRegisterUserMutation } = userApi;