import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import clearInput from '@/shared/assets/images/clearInput.svg';

import styles from './styles.module.scss';

export function ImageSearch() {
    const navigate = useNavigate();
    const { search, pathname } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');
    const [clearButtonIsShown, setClearButtonIsShown] = useState(false);

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

    useEffect(() => {
        setClearButtonIsShown(inputValue.length > 0);
    }, [inputValue.length]);

    return (
        <div className={styles.search}>
            <div className={styles.inputGroup}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={setSearchParams}
                    onKeyDown={onKeyDown}
                    className={styles.searchInput}
                    placeholder='Телефоны, яблоки, груши...'
                    enterKeyHint='search'
                />
                {clearButtonIsShown ? (
                    <img
                        onClick={() => setInputValue('')}
                        src={clearInput}
                        className={styles.searchClear}
                    />
                ) : null}
            </div>
            <button
                className={styles.searchButton}
                onClick={implementSearch}
            >
                Искать
            </button>
        </div>
    );
}
