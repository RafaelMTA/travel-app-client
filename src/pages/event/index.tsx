import {useEffect, useState} from 'react';
import EventRepository from 'components/Repositories/event';
import { Container } from './style';
import { repositoryGetAll } from 'service/api';
import { useEvent } from 'hooks/useEvent';
import { AxiosError } from 'axios';
import { useAuth } from 'hooks/useAuth';

const Event = () => {
    const [repository, setRepository] = useState([]);
    const { clear, set } = useEvent();
    const auth = useAuth();
    
    const loadData = async(query="") => {
        try{
            const response = await repositoryGetAll(query);
            setRepository(response.data);
        }catch(error){
            const err = error as AxiosError;
            if(err?.response?.status !== 200) auth.logout();
        }
    }

    useEffect(() => {
        (async() => await loadData())();
        clear();
    }, []);

    return (
        <Container>
            <EventRepository repository={repository} />  
        </Container>         
    );
}

export default Event;