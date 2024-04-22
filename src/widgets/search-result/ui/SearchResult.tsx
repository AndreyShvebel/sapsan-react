import { useLocation } from 'react-router-dom';

import { Loader } from '@/entities/loader';

import { useGetImagesQuery } from '@/features/image-search';

export function SearchResult() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const { data, isLoading } = useGetImagesQuery({ page: 1, query: searchParams.get('query')! });
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : data?.results.length ? (
                data?.results.map(img => (
                    <img
                        key={img.id}
                        src={img.urls.regular}
                    />
                ))
            ) : (
                <h5>К сожалению, поиск не дал результатов</h5>
            )}
        </div>
    );
}
