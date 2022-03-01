import React from 'react';
import EventForm from '..';

import { repositoryCreate } from 'service/api';
import { useEvent } from 'hooks/useEvent';

const EventFormNew = () => {
    const evt = useEvent();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, data: object) => {
        e.preventDefault();
        await repositoryCreate(data, evt.eventId!);
    }

    return(
        <><EventForm onSubmit={e => handleSubmit}/></>
    );
}

export default EventFormNew;