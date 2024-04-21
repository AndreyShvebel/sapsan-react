import { useState } from 'react';

export function ImageSearch() {
    const [query, setQuery] = useState('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const onSearchClick = async () => {
        const response = await fetch(import.meta.env.VITE_API_URL! + `&query=${query}&page=1`);
        const json = await response.json();
        console.log(json);
    };

    return (
        <>
            <input
                onChange={onInputChange}
                type='text'
            />
            <button onClick={onSearchClick}>Искать</button>
        </>
    );
}
