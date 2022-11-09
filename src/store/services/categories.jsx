import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
	reducerPath: 'categoryAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api-js401.herokuapp.com/api/v1/',
    }),
    endpoints: (builder) => ({
        getCategoryByName: builder.query({
            query: (name) => `categories/${name}`
        })
    })
});


export const { useGetCategoryByNameQuery } = categoryApi;