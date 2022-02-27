import { useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState<string>('');

    const clear = () => {
        setSearch('');
    }

    return {search, setSearch, clear};
}

export default useSearch;