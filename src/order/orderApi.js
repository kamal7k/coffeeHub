import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../app/constants/spi_urls";

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/orders`,
  }),
  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (q) => ({
        url: '/all',
        method: 'GET'
      }),
      providesTags: ['Orders']
    }),

    addOrder: builder.mutation({
      query: (q) => ({
        url: `/`,
        body: q.body,
        headers: {
          Authorization: q.token // Make sure to format the token correctly
        },
        method: 'POST',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useAddOrderMutation, useGetAllOrdersQuery } = orderApi;
