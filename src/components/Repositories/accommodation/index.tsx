import AccommodationItem from 'components/Custom-Elements/repositoryitem/accommodationItem';
import { Accommodation } from 'interfaces/Accommodation';
import { Container, ContainerItem, List } from './style';

interface Props {
    repository: Array<Accommodation>;
    onDelete(id:string, title:string):Promise<void>;
}

const AccommodationRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>       
            <ContainerItem>           
                <List>
                    {repository.map((item) => {
                        return(
                            <li key={item.id}>
                                <AccommodationItem 
                                    accommodation={item as Accommodation}
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

export default AccommodationRepository;