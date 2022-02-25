import React, {useEffect, useState} from 'react';
import EventRepository from 'components/repositories/event';
import useFetch from 'hooks/useFetch';
import { Container } from './style';

const Event = () => {
    const { data, execute } = useFetch('GET');

    const handleSearch = async(query:string) => {
        await execute(query);
    }

    return (
        <Container>
            <EventRepository data={data} onSearchValue={handleSearch} />  
        </Container>         
    );
}

export default Event;