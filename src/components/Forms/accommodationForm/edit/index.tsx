import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AccommodationForm from '..';

import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';

interface CustomState{
    id: string;
}

const AccommodationFormEdit = () => {
    const evt = useEvent();
    const fetch = useFetch();
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as CustomState;

    useEffect(() =>{
        (async() => await fetch.execute("GET", {eventId: evt.eventId!, table: "accommodation", tableId: state.id}))();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, data: object) => { 
        e.preventDefault();
        await fetch.execute("PUT", {eventId: evt.eventId!, table: "accommodation", tableId: state.id}, data);
        navigate('/accommodation');
    }

    if(fetch.loading) return(<>loading</>);

    return(
        <><AccommodationForm type="EDIT ACCOMMODATION" repositoryData={fetch.response} onSubmit={handleSubmit}/></>
    );
}

export default AccommodationFormEdit;