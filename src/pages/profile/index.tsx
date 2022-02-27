import React from 'react';
import ProfileRepository from 'components/Repositories/profile';

const Profile = () => {
    const handleSearch = () => {
        console.log('clicked search');
    }

    const handleDeleteItem = () => {
        console.log('clicked delete');
    }

    return (
        <ProfileRepository onSearchValue={handleSearch} onDeleteItem={handleDeleteItem} />
    );
}

export default Profile;