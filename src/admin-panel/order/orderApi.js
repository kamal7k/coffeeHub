import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../app/constants/spi_urls";



export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/orders`
  }),

  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: (q) => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ['Orders']
    })

  }),
})

export const { useGetAllOrdersQuery } = orderApi;