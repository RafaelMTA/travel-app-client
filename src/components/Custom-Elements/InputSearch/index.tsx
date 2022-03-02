import React, {useState} from 'react';
import InputIcon from 'components/Custom-Elements/inputIcon';

import SearchIcon from '@material-ui/icons/Search';
import useSearch from 'hooks/useSearch';

const InputSearch = () => {
    const { search, setSearch } = useSearch();

    return(
        <InputIcon 
            type="text" 
            id="search" 
            placeholder="Search..." 
            icon={<SearchIcon />} 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
        />
    );
}

export default InputSearch;