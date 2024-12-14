import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SistemasRiego } from '../../entities/sistemasRiego';
import { riego } from './riegoSlice';

export const apiSlices = createApi({
    reducerPath: 'apiSlices',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.211:3000' }),
    endpoints: (builder) => ({
        getValvulaRiego: builder.query({
            query: () => ({
                url: `/items`,
                method: 'GET',
            }),
            transformResponse: (response : any) => response as riego[]
        
        }),
        postValvulaRiego: builder.mutation({
            query: ( grupos: riego[] ) => ({
                url: `/items`,
                method: `POST`,
                body: grupos
            }),
            transformResponse: (response : any) => response as riego[]
        
        })
    }),
});

export const { useGetValvulaRiegoQuery, usePostValvulaRiegoMutation } = apiSlices;