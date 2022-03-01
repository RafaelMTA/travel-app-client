import React, {useState} from 'react';

import InputIcon from 'components/Custom-Elements/inputIcon';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    onSearchValue: any;
    onDeleteItem: any;
}

const TransportRepository = ({onSearchValue, onDeleteItem} : Props) => {
    const [search, setSearch] = useState('');

    const handleSearchValue = (query:string) => {
        onSearchValue(query);
    }

    return (
        <InputIcon 
            type="text" 
            id="" 
            placeholder="Search for an Transport..." 
            icon={<SearchIcon />} 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            buttonIcon={<ArrowForwardIcon />}
            onClick={() => handleSearchValue(search)}
        />
    );
}

export default TransportRepository;