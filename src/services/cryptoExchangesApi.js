import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url) => ({
  url,
  method: 'POST',
  headers: new Headers({
    'content-type': 'application/json',
    'x-api-key': '<YOUR LIVE COIN WATCH KEY>',
  }),
  body: JSON.stringify({
    currency: 'EUR',
    sort: 'volume',
    order: 'descending',
    offset: 0,
    limit: 50,
    meta: true,
  }),
});

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_LIVE_COIN_WATCH_URL,
  }),
  endpoints: (builder) => ({
    postCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges/list`),
    }),
  }),
});

export const { usePostCryptoExchangesQuery } = cryptoExchangesApi;
console.log(usePostCryptoExchangesQuery);
