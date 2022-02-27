import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EventRepository from 'components/Repositories/event';
import { Container } from './style';
import { repositoryGetAll } from 'service/api';
import { useEvent } from 'hooks/useEvent';

const Event = () => {
    const [repository, setRepository] = useState([]);
    const { clear, set } = useEvent();
    
    const loadData = async(query="") => {
        try{
            const response = await repositoryGetAll(query);
            setRepository(response.data);
        }catch(error){

        }
    }

    useEffect(() => {
        (async() => await loadData())();
        clear();
    }, []);

    const handleSearch = async(query:string) => {
        await loadData(query);
    }

    const handleEdit = async(event_id:string) => {
        set(event_id);
    }

    const handleDelete = async(event_id:string) => {
        const c = window.confirm("Do you want to delete this event?");
        if(c) console.log("deleted");
    }

    return (
        <Container>
            <EventRepository repository={repository} onSearch={() => handleSearch} onEdit={handleEdit} onDelete={() => handleDelete} />  
        </Container>         
    );
}

export default Event;