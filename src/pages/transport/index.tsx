import React from 'react';
import TransportRepository from 'components/Repositories/transport';

const Transport = () => {
    const handleSearch = () => {
        console.log('clicked search');
    }

    const handleDeleteItem = () => {
        console.log('clicked delete');
    }

    return (
        <TransportRepository onSearchValue={handleSearch} onDeleteItem={handleDeleteItem} />
    );
}

export default Transport;