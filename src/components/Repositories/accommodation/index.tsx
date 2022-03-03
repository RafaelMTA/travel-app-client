import AccommodationItem from 'components/Custom-Elements/repositoryitem/accommodationItem';
import { IAccommodation } from 'interfaces/Accommodation';
import { Container, List } from './style';

interface Props {
    repository: Array<IAccommodation>;
    onDelete(id:string, title:string):Promise<void>;
}

const AccommodationRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>               
            <List>
                {repository.map((item) => {
                    return(
                        <li key={item.id}>
                            <AccommodationItem 
                                accommodation={item as IAccommodation}
                                onDelete={onDelete}
                            />
                        </li>
                    );
                })}
            </List>          
        </Container>
    );
}

export default AccommodationRepository;