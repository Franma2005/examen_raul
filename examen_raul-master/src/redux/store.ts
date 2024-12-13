import { configureStore } from '@reduxjs/toolkit';
import { apiSlices } from './slices/apiSlices';

const store = configureStore({
    reducer: {
        [ apiSlices.reducerPath ]: apiSlices.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlices.middleware),
});

export default store;