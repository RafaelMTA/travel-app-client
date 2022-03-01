import React, {useState} from 'react';
import InputIcon from 'components/Custom-Elements/inputIcon';

import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useSearch from 'hooks/useSearch';

interface Props{
    onSearch(query:string): void;
}

const InputSearch = ({onSearch}:Props) => {
    const { search, setSearch } = useSearch();

    return(
        <InputIcon 
            type="text" 
            id="search" 
            placeholder="Search for an Event..." 
            icon={<SearchIcon />} 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            buttonIcon={<ArrowForwardIcon />}
            bgColor="linear-gradient(to right, #6a9113, #141517)"
            onClick={() => onSearch(search)}
        />
    );
}

export default InputSearch;