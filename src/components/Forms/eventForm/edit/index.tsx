import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '..';

import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';

const EventFormEdit = () => {
    const evt = useEvent();
    const fetch = useFetch();
    const navigate = useNavigate();
    
    useEffect(() =>{
        (async() => await fetch.execute("GET", {eventId: evt.eventId!}))();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, data: object) => { 
        e.preventDefault();
        await fetch.execute("PUT", {eventId: evt.eventId!}, data);
        navigate('/dashboard');
    }

    if(fetch.loading) return(<>loading</>);

    return(
        <><EventForm type="EDIT EVENT" repositoryData={fetch.response} onSubmit={handleSubmit}/></>
    );
}

export default EventFormEdit;