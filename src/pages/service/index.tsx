import React from 'react';
import ServiceRepository from 'components/Repositories/service';

const Service = () => {
    const handleSearch = () => {
        console.log('clicked search');
    }

    const handleDeleteItem = () => {
        console.log('clicked delete');
    }

    return (
        <ServiceRepository onSearchValue={handleSearch} onDeleteItem={handleDeleteItem} />
    );
}

export default Service;