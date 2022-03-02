import {useEffect} from 'react';
import { Container } from './style';

import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';

import RepositoryTemplate from 'components/Template/Repository';
import EventRepository from 'components/Repositories/event';

const Event = () => {
    const fetch = useFetch();
    const event = useEvent();   

    useEffect(() => {
        (async() => await loadData())();
        event.clear();
    }, []);

    const loadData = async () => {
        await fetch.execute("GET");
    }

    const handleDelete = async(id:string, title:string) => {
        const confirm = window.confirm("Delete event? " + title);
        if (confirm){
            if(id) await fetch.execute("DELETE", {eventId: id});
            event.clear();
            await loadData();
        }      
    }

    if(fetch.loading) return (<>Loading</>);

    return (
        <Container>
            <RepositoryTemplate addPath='/event/new'><EventRepository repository={fetch.response} onDelete={handleDelete} /></RepositoryTemplate>
        </Container>         
    );
}

export default Event;