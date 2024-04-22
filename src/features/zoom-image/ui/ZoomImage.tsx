import closeButton from '@/shared/assets/images/closeImage.svg';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import { closeImage } from '../model/zoomImageSlice';
import styles from './styles.module.scss';

export function ZoomImage() {
    const dispatch = useAppDispatch();
    const { isOpen, src } = useAppSelector(state => state.zoomImage);

    return isOpen ? (
        <div className={styles.overlay}>
            <div className={styles.imageContainer}>
                <img src={src} />
            </div>
            <img
                onClick={() => dispatch(closeImage())}
                src={closeButton}
                className={styles.close}
            />
        </div>
    ) : null;
}
