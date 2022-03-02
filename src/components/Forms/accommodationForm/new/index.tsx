import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '..';

import useFetch from 'hooks/useFetch';
import { useEvent } from 'hooks/useEvent';

const AccommodationFormNew = () => {
    const fetch = useFetch();
    const evt = useEvent();
    const navigate = useNavigate();
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, data: object) => {
        e.preventDefault();
        fetch.execute("POST", {eventId: evt.eventId!, table: "accommodation"}, data);
        navigate("/accommodation");
    }

    return(
        <><EventForm type="CREATE NEW ACCOMMODATION" onSubmit={handleSubmit}/></>
    );
}

export default AccommodationFormNew;