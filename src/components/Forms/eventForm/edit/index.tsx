import React from 'react';
import { useEvent } from 'hooks/useEvent';
import { repositoryUpdate } from 'service/api';
import EventForm from '..';

const EventFormEdit = () => {
    const evt = useEvent();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, data: object) => {
        e.preventDefault();
        await repositoryUpdate(data, evt.eventId!);
    }

    return(
        <><EventForm onSubmit={e => handleSubmit}/></>
    );
}

export default EventFormEdit;