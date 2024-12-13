import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SistemasRiego } from '../../entities/sistemasRiego';

export const apiSlices = createApi({
    reducerPath: 'apiSlices',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.211:3000' }),
    endpoints: (builder) => ({
        getValvulaRiego: builder.query<SistemasRiego[], void>({
            query: () => ({
                url: `/items`,
                method: 'GET',
            }),
        }),
        postValvulaRiego: builder.mutation({
            query: () => ({
                url: `/items`,
                method: `POST`
            })
        })
    }),
});

export const { useGetValvulaRiegoQuery, usePostValvulaRiegoMutation } = apiSlices;