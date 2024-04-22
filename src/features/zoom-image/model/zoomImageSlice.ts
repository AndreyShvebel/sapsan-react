import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';

const initialState = {
    isOpen: false,
    src: '',
};

const zoomImageSlice = createSlice({
    name: 'zoomImage',
    initialState,
    reducers: {
        openImage: (state, { payload }: PayloadAction<string>) => {
            state.isOpen = true;
            state.src = payload;
        },
        closeImage: state => {
            state.isOpen = false;
            state.src = '';
        },
    },
});

export const { closeImage, openImage } = zoomImageSlice.actions;
export default zoomImageSlice.reducer;
