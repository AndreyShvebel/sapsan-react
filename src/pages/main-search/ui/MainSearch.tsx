import { useOutlet } from 'react-router-dom';

import { ImageSearch } from '@/features/image-search';

import styles from './styles.module.scss';

export function MainSearch() {
    const outlet = useOutlet();
    return (
        <>
            {!outlet && (
                <div className={styles.searchWrapper}>
                    <ImageSearch />
                </div>
            )}
            <div className={styles.main}>{outlet}</div>
        </>
    );
}
