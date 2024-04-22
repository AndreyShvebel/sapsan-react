import { useEffect, useState } from 'react';

import closeButton from '@/shared/assets/images/closeImage.svg';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

import { Loader } from '@/entities/loader';

import { closeImage } from '../model/zoomImageSlice';
import styles from './styles.module.scss';

export function ZoomImage() {
    const dispatch = useAppDispatch();
    const { isOpen, src } = useAppSelector(state => state.zoomImage);
    const [imgIsLoaded, setImgIsLoaded] = useState(false);

    return isOpen ? (
        <div className={styles.overlay}>
            <div className={styles.imageContainer}>
                {imgIsLoaded ? null : (
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                )}
                <img
                    src={src}
                    onLoad={() => setImgIsLoaded(true)}
                />
            </div>
            <img
                onClick={() => {
                    dispatch(closeImage());
                    setImgIsLoaded(false);
                }}
                src={closeButton}
                className={styles.close}
            />
        </div>
    ) : null;
}
