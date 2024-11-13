import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_DATABASE_API}/api`
})


const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
    const response = await baseQuery(args, api, extraOptions);
    return response;
}


export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryExtended,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ['data'],
    endpoints: () => ({})
})