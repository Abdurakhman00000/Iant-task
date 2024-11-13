import {api as index} from "..";


const api = index.injectEndpoints({
    endpoints: (builder) => ({
        GetCoursesData: builder.query<DATA.GetCoursesDataResponse, DATA.GetCoursesDataRequest>({
            query: () => ({
                url: `/courses/`,
                method: 'GET',
            }),
            providesTags: ['data']
        }),
        GetWorkshopData: builder.query<DATA.GetWorkshopDataResponse, DATA.GetWorkshopDataRequest>({
            query: () => ({
                url: `/freeworkshops/`,
                method: 'GET',
            }),
            providesTags: ['data']
        }),
        GetArticleData: builder.query<DATA.GetArticlesDataResponse, DATA.GetArticlesDataRequest>({
            query: () => ({
                url: `/articles/`,
                method: 'GET',
            }),
            providesTags: ['data']
        })
    })
})


export const {useGetCoursesDataQuery, useGetWorkshopDataQuery, useGetArticleDataQuery} = api;