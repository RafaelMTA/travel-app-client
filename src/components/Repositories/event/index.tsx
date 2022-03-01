import React from 'react';
import { Container, ContainerItem, List } from './style';

import EventItem from 'components/Custom-Elements/repositoryitem/eventItem';
import Repository from 'components/template/Repository';

interface Props {
    repository: Array<any>;
}

interface Event {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    description: string;
}

const EventRepository = ({repository} : Props) => {

    return (
        <Container>       
            {/* <Repository placeholder="" /> */}
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