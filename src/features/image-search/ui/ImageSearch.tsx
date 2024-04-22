import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

export function ImageSearch() {
    const navigate = useNavigate();
    const { search, pathname } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');

    const setSearchParams = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const implementSearch = () => {
        searchParams.set('query', inputValue);
        navigate({
            pathname: pathname.includes('result') ? '' : 'result',
            search: searchParams.toString(),
        });
    };

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            implementSearch();
        }
    };

    useEffect(() => {
        setInputValue(searchParams.get('query') ?? '');
    }, [search]);

    return (
        <>
            <input
                type='text'
                value={inputValue}
                onChange={setSearchParams}
                onKeyDown={onKeyDown}
                className={styles.searchInput}
                placeholder='Телефоны, яблоки, груши...'
                enterKeyHint='search'
            />
            <button
                className={styles.searchButton}
                onClick={implementSearch}
            >
                Искать
            </button>
        </>
    );
}
