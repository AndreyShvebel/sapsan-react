import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function ImageSearch() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const inputRef = useRef<HTMLInputElement>(null);

    const searchParams = new URLSearchParams(search);
    const onSearchClick = async () => {
        searchParams.set('query', inputRef.current?.value ?? '');

        navigate({
            search: searchParams.toString(),
        });
    };

    return (
        <>
            <input
                type='text'
                ref={inputRef}
                defaultValue={searchParams.get('query') ?? ''}
            />
            <button onClick={onSearchClick}>Искать</button>
        </>
    );
}
