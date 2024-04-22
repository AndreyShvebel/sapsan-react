import { useAppDispatch } from '@/shared/hooks';

import { openImage } from '../model/zoomImageSlice';

export function useOpenImage() {
    const dispatch = useAppDispatch();

    const open = (src: string) => {
        dispatch(openImage(src));
    };

    const prepareOpening = (src: string) => () => open(src);

    return prepareOpening;
}
