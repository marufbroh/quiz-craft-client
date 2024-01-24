import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.SERVER_URL}/api` }),
    endpoints: (builder) => ({
        getAllModules: builder.query({
            query: () => ({
                url: "/module",
                method: "GET"
            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllModulesQuery } = baseApi