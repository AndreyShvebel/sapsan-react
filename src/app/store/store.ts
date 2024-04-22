import { configureStore } from '@reduxjs/toolkit';

import { searchApi } from '@/features/image-search';
import { zoomImageSlice } from '@/features/zoom-image';

export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        zoomImage: zoomImageSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(searchApi.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export type TAppStore = typeof store;
