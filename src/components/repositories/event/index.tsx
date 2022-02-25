import React, {useState} from 'react';
import { Container, ContainerItem } from './style';

import InputIcon from 'components/InputIcon';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import EventItem from 'components/repositoryitem/eventItem';

interface Props {
    data: Array<any>;
    onSearchValue: any;
}

interface Event {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    description: string;
}

const EventRepository = ({data, onSearchValue} : Props) => {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <InputIcon 
                type="text" 
                id="search" 
                placeholder="Search for an Event..." 
                icon={<SearchIcon />} 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                buttonIcon={<ArrowForwardIcon />}
                onClick={() => onSearchValue(search)}
            />
            <ContainerItem>
                <EventItem title="teste" description="description" start_date="2022-01-01T12:00:24.208Z" end_date="2022-03-03T12:00:24.208Z"></EventItem>
                <ul>
                    {data && data.map((item: Event) => {
                        <li key={item.id} onClick={(e) => console.log(e.currentTarget.dataset.id)}>
                            <EventItem title={item.name} description={item.description} start_date={item.start_date} end_date={item.end_date}></EventItem>
                        </li>
                    })}
                </ul>
            </ContainerItem>
            
        </Container>
    );
}

export default EventRepository;