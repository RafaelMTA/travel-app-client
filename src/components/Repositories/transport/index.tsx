import TransportItem from 'components/Custom-Elements/repositoryitem/transportItem';
import { Transport } from 'interfaces/Transport';
import { Container, ContainerItem, List } from './style';

interface Props {
    repository: Array<Transport>;
    onDelete(id:string, title:string):Promise<void>;
}

const TransportRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>       
            <ContainerItem>           
                <List>
                    {repository.map((item) => {
                        return(
                            <li key={item.id}>
                                <TransportItem 
                                    transport={item as Transport}
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

export default TransportRepository;