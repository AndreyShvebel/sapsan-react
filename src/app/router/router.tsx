import { createBrowserRouter } from 'react-router-dom';

import { MainSearch } from '@/pages/main-search/ui/MainSearch';
import { SearchWithResult } from '@/pages/search-with-result';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainSearch />,
        children: [
            {
                path: ':query',
                element: <SearchWithResult />,
            },
        ],
    },
]);
