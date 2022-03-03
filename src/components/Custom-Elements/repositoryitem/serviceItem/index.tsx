import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, ImageContainer, DataContainer, Title, Arrival, Departure, Action } from './style';

import ClearIcon from '@material-ui/icons/Clear';
import TodayIcon from '@material-ui/icons/Today';

import { IService } from 'interfaces/Service';

interface Props{
    service: IService;
    onDelete(id:string, title:string):Promise<void>;
}

const ServiceItem = ({service, onDelete}:Props) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/service/edit', {
            state:{
                id: service.id
            }
        })
    }

    return(
        <Container>    
            <ImageContainer src={service.imageURL || ""}></ImageContainer>
            <DataContainer onClick={handleEdit}>
                <Title>{service.title}</Title>
                <Arrival><TodayIcon /><Moment format="DD-MM-YYYY">{service.arrival}</Moment></Arrival>
                <Departure><TodayIcon /><Moment format="DD-MM-YYYY">{service.departure}</Moment></Departure>                             
            </DataContainer>     
            <Action onClick={() => onDelete(service.id, service.title)} ><ClearIcon className="icon-item" /></Action>      
        </Container>
    );
}

export default ServiceItem;