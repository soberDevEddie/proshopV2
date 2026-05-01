import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// My files
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'User', 'Order'],
  endpoints: (builder) => ({}),
});
