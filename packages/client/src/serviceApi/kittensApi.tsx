import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const kittensApi = createApi({
  reducerPath: 'kittens',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    getkittens: builder.query({
      query: () => '/kittens',
    }),
    getSingleKitten: builder.query({
      query: (id) => `/kittens/${id}`,
    }),
  }),
});

export const { useGetkittensQuery, useGetSingleKittenQuery } = kittensApi;
