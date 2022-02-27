import React, {useState} from 'react';
import { Container, ContainerItem, List } from './style';

import EventItem from 'components/Custom-Elements/repositoryitem/eventItem';
import InputSearch from 'components/Custom-Elements/InputSearch';

interface Props {
    repository: Array<any>;
    onSearch(query:string): void;
    onEdit(id:string): void;
    onDelete(): void;
}

interface Event {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    description: string;
}

const EventRepository = ({repository, onSearch, onEdit, onDelete} : Props) => {

    return (
        <Container>
            <InputSearch onSearch={onSearch}/>
            <ContainerItem>           
                <List>
                    {repository.map((item: Event) => {
                        return(
                            <li key={item.id}>
                                <EventItem 
                                    id={item.id} 
                                    title={item.name} 
                                    description={item.description} 
                                    start_date={item.start_date} 
                                    end_date={item.end_date} 
                                    onEdit={onEdit} 
                                    onDelete={onDelete}
                                />
                            </li>
                        );
                    })}
                </List>
            </ContainerItem>            
        </Container>
    );
}

export default EventRepository;