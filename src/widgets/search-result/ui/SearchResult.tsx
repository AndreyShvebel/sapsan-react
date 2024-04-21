import { useLocation } from 'react-router-dom';

import { Loader } from '@/entities/loader';

import { useGetImagesQuery } from '@/features/image-search';

export function SearchResult() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const { data, isLoading } = useGetImagesQuery(searchParams.toString());
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                data?.results.map(img => (
                    <img
                        key={img.id}
                        src={img.urls.regular}
                    />
                ))
            )}
        </div>
    );
}
