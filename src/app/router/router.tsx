import { createBrowserRouter } from 'react-router-dom';

import { Base } from '../../pages/base/ui/Base';
import { MainSearch } from '@/pages/main-search/ui/MainSearch';
import { SearchWithResult } from '@/pages/search-with-result';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Base />,
    },
    {
        path: '/search',
        element: <MainSearch />,
    },
    {
        path: '/search/result',
        element: <SearchWithResult />,
    },
    {
        path: '*',
        element: <h1>Page not found</h1>,
    },
]);
