import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    endpoints: builder => ({
        getImages: builder.query<unknown, string>({
            query: params => `/${params}`,
        }),
    }),
});

export const { useGetImagesQuery } = searchApi;
