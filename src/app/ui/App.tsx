import { Provider as ReduxProvider } from 'react-redux';

import { ImageSearch } from '@/features/image-search';

import { store } from '../store/store';

export function App() {
    return (
        <ReduxProvider store={store}>
            <ImageSearch />
        </ReduxProvider>
    );
}
