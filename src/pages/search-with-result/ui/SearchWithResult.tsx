import { ImageSearch } from '@/features/image-search';

import { SearchResult } from '@/widgets/search-result';

export function SearchWithResult() {
    return (
        <>
            <ImageSearch />
            <SearchResult />
        </>
    );
}
