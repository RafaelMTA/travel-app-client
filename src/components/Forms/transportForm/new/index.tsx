import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '..';

import useFetch from 'hooks/useFetch';
import { useEvent } from 'hooks/useEvent';

const TransportFormNew = () => {
    const fetch = useFetch();
    const evt = useEvent();
    const navigate = useNavigate();
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, data: object) => {
        e.preventDefault();
        fetch.execute("POST", {eventId: evt.eventId!, table: "transport"}, data);
        navigate("/transport");
    }

    return(
        <><EventForm type="CREATE NEW TRANSPORT" onSubmit={handleSubmit}/></>
    );
}

export default TransportFormNew;