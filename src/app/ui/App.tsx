import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from '../router/router';
import { store } from '../store/store';
import './styles.module.scss';

export function App() {
    return (
        <ReduxProvider store={store}>
            <RouterProvider router={router} />
        </ReduxProvider>
    );
}
