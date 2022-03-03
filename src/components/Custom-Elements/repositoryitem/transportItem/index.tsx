import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, ImageContainer, DataContainer, Title, Arrival, Departure, Action } from './style';

import ClearIcon from '@material-ui/icons/Clear';
import TodayIcon from '@material-ui/icons/Today';

import { ITransport } from 'interfaces/Transport';

interface Props{
    transport: ITransport;
    onDelete(id:string, title:string):Promise<void>;
}

const TransportItem = ({transport, onDelete}:Props) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/transport/edit', {
            state:{
                id: transport.id
            }
        })
    }

    return(
        <Container>    
            <ImageContainer src={transport.imageURL || ""}></ImageContainer>
            <DataContainer onClick={handleEdit}>
                <Title>{transport.title}</Title>
                <Arrival><TodayIcon /><Moment format="DD-MM-YYYY">{transport.arrival}</Moment></Arrival>
                <Departure><TodayIcon /><Moment format="DD-MM-YYYY">{transport.departure}</Moment></Departure>                             
            </DataContainer>     
            <Action onClick={() => onDelete(transport.id, transport.title)} ><ClearIcon className="icon-item" /></Action>      
        </Container>
    );
}

export default TransportItem;