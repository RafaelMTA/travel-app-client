import { Container, ContainerItem, List } from './style';
import { Event } from 'interfaces/Event';
import EventItem from 'components/Custom-Elements/repositoryitem/eventItem';

interface Props {
    repository: Array<Event>;
    onDelete(id:string, title:string):Promise<void>;
}

const EventRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>       
            <ContainerItem>           
                <List>
                    {repository.map((item) => {
                        return(
                            <li key={item.id}>
                                <EventItem 
                                    event={item as Event}
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