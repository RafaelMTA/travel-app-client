import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '..';

import useFetch from 'hooks/useFetch';
import { useEvent } from 'hooks/useEvent';

const ServiceFormNew = () => {
    const fetch = useFetch();
    const evt = useEvent();
    const navigate = useNavigate();
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, data: object) => {
        e.preventDefault();
        fetch.execute("POST", {eventId: evt.eventId!, table: "service"}, data);
        navigate("/service");
    }

    return(
        <><EventForm type="CREATE NEW SERVICE" onSubmit={handleSubmit}/></>
    );
}

export default ServiceFormNew;