import { useLocation } from 'react-router-dom';

import { useGetImagesQuery } from '@/features/image-search';

export function SearchResult() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const { data } = useGetImagesQuery(searchParams.toString());
    return (
        <div>
            {data?.results.map(img => (
                <img
                    key={img.id}
                    src={img.urls.regular}
                />
            ))}
        </div>
    );
}
