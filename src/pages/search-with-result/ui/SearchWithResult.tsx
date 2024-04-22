import { ImageSearch } from '@/features/image-search';

import { SearchResult } from '@/widgets/search-result';

import styles from './styles.module.scss';

export function SearchWithResult() {
    return (
        <div className={styles.main}>
            <div className={styles.inputWrapper}>
                <ImageSearch />
            </div>
            <div className={styles.contentWrapper}>
                <SearchResult />
            </div>
        </div>
    );
}
