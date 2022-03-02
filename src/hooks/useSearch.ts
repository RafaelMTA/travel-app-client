import { useEffect, useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');

    const clear = () => {
        setSearch('');
    }

    // useEffect(() => {
    //     clear();
    // },[]);

    return {search, setSearch, clear};
}

export default useSearch;