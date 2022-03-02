import ServiceItem from 'components/Custom-Elements/repositoryitem/serviceItem';
import { Service } from 'interfaces/Service';
import { Container, ContainerItem, List } from './style';

interface Props {
    repository: Array<Service>;
    onDelete(id:string, title:string):Promise<void>;
}

const ServiceRepository = ({repository, onDelete} : Props) => {
    return (
        <Container>       
            <ContainerItem>           
                <List>
                    {repository.map((item) => {
                        return(
                            <li key={item.id}>
                                <ServiceItem 
                                    service={item as Service}
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

export default ServiceRepository;