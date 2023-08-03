import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicApi = createApi({
  reducerPath: "trackReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog",
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: "/track/all/",
      })
    }),
    getAllFavorite:builder.query({
      query: (headers) => ({
        url: "/track/favorite/all/",
        headers,
      })
    }),
    getSelection:builder.query({
      query:(body) => ({
        url: "/selection/",
        body
      })
    }),
    addToFavorites: builder.mutation({
      query: (trackId) => ({
        url: `/track/${trackId}/favorite/`,
        method: 'POST',
      }),
    })
  }),
});

export const loginApi = createApi({
  reducerPath:"loginReducer",
  baseQuery:fetchBaseQuery({
    baseUrl: "https://painassasin.online/user"
  }),
  endpoints: (builder) => ({
    getLogin: builder.mutation({
      query: (user) => ({
        url: "/login/",
        method: "POST",
        body: user,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
    getSignUp: builder.mutation({
      query: (body) => ({
        url: '/signup/',
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'application/json',
        },
      })
    }),
    getToken: builder.mutation({
      query: (user) => ({
        url: "/token/",
        method: "POST",
        body: user,
      }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/token/refresh/",
        method: "POST",
        body: refreshToken,
      }),
    }),
    })
})

export const { useGetAllTracksQuery, useAddToFavoritesMutation } = musicApi;

export const { useGetLoginQuery, useGetSignUpMutation, useGetLoginMutation, useGetTokenMutation, useRefreshTokenMutation } = loginApi;