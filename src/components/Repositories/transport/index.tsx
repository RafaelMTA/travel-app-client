import TransportItem from 'components/Custom-Elements/repositoryitem/transportItem';
import { ITransport } from 'interfaces/Transport';
import { Container, List } from './style';

interface Props {
    repository: Array<ITransport>;
    onDelete(id:string, title:string):Promise<void>;
}

const TransportRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>               
            <List>
                {repository.map((item) => {
                    return(
                        <li key={item.id}>
                            <TransportItem 
                                transport={item as ITransport}
                                onDelete={onDelete}
                            />
                        </li>
                    );
                })}
            </List>          
        </Container>
    );
}

export default TransportRepository;