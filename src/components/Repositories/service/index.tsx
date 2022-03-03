import ServiceItem from 'components/Custom-Elements/repositoryitem/serviceItem';
import { IService } from 'interfaces/Service';
import { Container, List } from './style';

interface Props {
    repository: Array<IService>;
    onDelete(id:string, title:string):Promise<void>;
}

const ServiceRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>                
            <List>
                {repository.map((item) => {
                    return(
                        <li key={item.id}>
                            <ServiceItem 
                                service={item as IService}
                                onDelete={onDelete}
                            />
                        </li>
                    );
                })}
            </List>          
        </Container>
    );
}

export default ServiceRepository;