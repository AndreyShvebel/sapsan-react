import { useOutlet } from 'react-router-dom';

import { ImageSearch } from '@/features/image-search';

export function MainSearch() {
    const outlet = useOutlet();
    return (
        <>
            {!outlet && <ImageSearch />}
            {/* <Outlet /> */}
            {outlet}
        </>
    );
}
