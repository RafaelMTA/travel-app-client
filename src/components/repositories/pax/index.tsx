import React, {useState} from 'react';

import InputIcon from 'components/InputIcon';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    onSearchValue: any;
    onDeleteItem: any;
}

const PaxRepository = ({onSearchValue, onDeleteItem} : Props) => {
    const [search, setSearch] = useState('');

    const handleSearchValue = (query:string) => {
        onSearchValue(query);
    }

    return (
        <InputIcon 
            type="text" 
            id="" 
            placeholder="Search for an Pax..." 
            icon={<SearchIcon />} 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            buttonIcon={<ArrowForwardIcon />}
            onClick={() => handleSearchValue(search)}
        />
    );
}

export default PaxRepository;