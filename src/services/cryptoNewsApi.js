import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const newsHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '84e38c3800msh21836a930da63acp12cdc3jsncb694f24e89e'
  }
const baseUrl='https://bing-news-search1.p.rapidapi.com/news';
const createRequest = (url) => ({ url, headers: newsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({newsCategory,count}) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const {useGetCryptosNewsQuery}=cryptoNewsApi;