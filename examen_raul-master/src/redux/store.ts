import { configureStore } from '@reduxjs/toolkit';
import { apiSlices } from './slices/apiSlices';
import { riegoSlice } from './slices/riegoSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        [ apiSlices.reducerPath ]: apiSlices.reducer,
        [ riegoSlice.name ]: riegoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlices.middleware),
});

export default store;