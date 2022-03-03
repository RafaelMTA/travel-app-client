import { Container, List } from './style';
import { IPax } from 'interfaces/Pax';
import PaxItem from 'components/Custom-Elements/repositoryitem/paxItem';

interface Props {
    repository: Array<IPax>;
    onDelete(id:string, title:string):Promise<void>;
}
 
const PaxRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>                
            <List>
                {repository.map((item) => {
                    return(
                        <li key={item.id}>
                            <PaxItem 
                                pax={item as IPax}
                                onDelete={onDelete}
                            />
                        </li>
                    );
                })}
            </List>         
        </Container>
    );
}

export default PaxRepository;