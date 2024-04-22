import { useLocation } from 'react-router-dom';

import { ImageContainer } from '@/entities/image-container';
import { Loader } from '@/entities/loader';

import { useGetImagesQuery } from '@/features/image-search';

import styles from './styles.module.scss';

export function SearchResult() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const { data, isLoading } = useGetImagesQuery({ page: 1, query: searchParams.get('query')! });
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : data?.results.length ? (
                <div className={styles.imageWrapper}>
                    {data?.results.map(img => (
                        <ImageContainer
                            key={img.id}
                            imgSrc={img.urls.small}
                            imgAlt={img.alt_description}
                            imgDescription={img.description}
                        />
                    ))}
                </div>
            ) : (
                <p>К сожалению, поиск не дал результатов</p>
            )}
        </div>
    );
}
