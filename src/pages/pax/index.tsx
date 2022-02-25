import React from 'react';
import PaxRepository from 'components/repositories/pax';

const Pax = () => {
    const handleSearch = () => {
        console.log('clicked search');
    }

    const handleDeleteItem = () => {
        console.log('clicked delete');
    }

    return (
        <PaxRepository onSearchValue={handleSearch} onDeleteItem={handleDeleteItem} />
    );
}

export default Pax;