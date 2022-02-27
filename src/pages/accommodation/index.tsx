import React, {useState} from 'react';
import AccommodationRepository from 'components/Repositories/accommodation';
import useFetch from 'hooks/useFetch';

const Accommodation = () => {
    const handleSearch = () => {
        console.log('clicked search');
    }

    const handleDeleteItem = () => {
        console.log('clicked delete');
    }

    return (
        <AccommodationRepository onSearchValue={handleSearch} onDeleteItem={handleDeleteItem} />
    );
}

export default Accommodation;