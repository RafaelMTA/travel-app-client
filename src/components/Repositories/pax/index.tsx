import { Container, ContainerItem, List } from './style';
import { Pax } from 'interfaces/Pax';
import PaxItem from 'components/Custom-Elements/repositoryitem/paxItem';

interface Props {
    repository: Array<Pax>;
    onDelete(id:string, title:string):Promise<void>;
}
 
const PaxRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>       
            <ContainerItem>           
                <List>
                    {repository.map((item) => {
                        return(
                            <li key={item.id}>
                                <PaxItem 
                                    pax={item as Pax}
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

export default PaxRepository;