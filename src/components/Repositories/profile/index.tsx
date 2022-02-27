import React, {useState} from 'react';

import InputIcon from 'components/Custom-Elements/InputIcon';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    onSearchValue: any;
    onDeleteItem: any;
}

const ProfileRepository = ({onSearchValue, onDeleteItem} : Props) => {
    const [search, setSearch] = useState('');

    const handleSearchValue = (query:string) => {
        onSearchValue(query);
    }

    return (
        <InputIcon 
            type="text" 
            id="" 
            placeholder="Search for an Event..." 
            icon={<SearchIcon />} 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            buttonIcon={<ArrowForwardIcon />}
            onClick={() => handleSearchValue(search)}
        />
    );
}

export default ProfileRepository;