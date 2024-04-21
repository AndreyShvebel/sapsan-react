import { configureStore } from '@reduxjs/toolkit';

import { searchApi } from '@/features/image-search';

export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(searchApi.middleware),
});
