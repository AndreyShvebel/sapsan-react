import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ImageContainer } from '@/entities/image-container';
import { Loader } from '@/entities/loader';

import { useGetImagesQuery } from '@/features/image-search';
import { ZoomImage, useOpenImage } from '@/features/zoom-image';

import styles from './styles.module.scss';

export function SearchResult() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetImagesQuery({ page, query: searchParams.get('query')! });
    const prepareOpeningImage = useOpenImage();

    useEffect(() => {
        // const interval = setInterval(() => {
        //     setPage(prev => ++prev);
        // }, 3000);
        // () => clearInterval(interval);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : data?.results.length ? (
                <>
                    <div className={styles.imageWrapper}>
                        {data?.results.map(img => (
                            <ImageContainer
                                key={img.id}
                                imgSrc={img.urls.small}
                                imgAlt={img.alt_description}
                                imgDescription={img.description}
                                onClick={prepareOpeningImage(img.urls.regular)}
                            />
                        ))}
                    </div>
                    <ZoomImage />
                </>
            ) : (
                <p>К сожалению, поиск не дал результатов</p>
            )}
        </div>
    );
}
