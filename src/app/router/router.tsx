import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { MainSearch } from '@/pages/main-search/ui/MainSearch';
import { SearchWithResult } from '@/pages/search-with-result';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navigate to='/search' />
                <Outlet />
            </>
        ),
        children: [
            {
                path: '/search',
                element: <MainSearch />,
                children: [
                    {
                        path: '/search/result',
                        element: <SearchWithResult />,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <h1>Page not found</h1>,
    },
]);
