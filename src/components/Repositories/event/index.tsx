import { Container, List } from './style';
import { IEvent } from 'interfaces/Event';
import EventItem from 'components/Custom-Elements/repositoryitem/eventItem';

interface Props {
    repository: Array<IEvent>;
    onDelete(id:string, title:string):Promise<void>;
}

const EventRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>              
            <List>
                {repository.map((item) => {
                    return(
                        <li key={item.id}>
                            <EventItem 
                                event={item as IEvent}
                                onDelete={onDelete}
                            />
                        </li>
                    );
                })}
            </List>        
        </Container>
    );
}

export default EventRepository;