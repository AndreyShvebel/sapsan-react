import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TResult = {
    total: number;
    total_pages: number;
    results: {
        id: string;
        created_at: string;
        updated_at: string;
        promoted_at: string;
        width: number;
        height: number;
        color: string;
        urls: {
            full: string;
            raw: string;
            regular: string;
            small: string;
            small_s3: string;
            thumb: string;
        };
    }[];
};

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    endpoints: builder => ({
        getImages: builder.query<TResult, string>({
            query: params => `/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&${params}&page=1`,
        }),
    }),
});

export const { useGetImagesQuery } = searchApi;
