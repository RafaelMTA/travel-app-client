import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '..';

import useFetch from 'hooks/useFetch';

const EventFormNew = () => {
    const fetch = useFetch();
    const navigate = useNavigate();
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, data: object) => {
        e.preventDefault();
        fetch.execute("POST", {}, data);
        navigate("/");
    }

    return(
        <><EventForm type="CREATE NEW EVENT" onSubmit={handleSubmit}/></>
    );
}

export default EventFormNew;