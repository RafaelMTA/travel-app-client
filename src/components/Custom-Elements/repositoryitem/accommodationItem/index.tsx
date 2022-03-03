import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, ImageContainer, DataContainer, Title, Arrival, Departure, Action } from './style';

import ClearIcon from '@material-ui/icons/Clear';
import TodayIcon from '@material-ui/icons/Today';

import { IAccommodation } from 'interfaces/Accommodation';

interface Props{
    accommodation: IAccommodation;
    onDelete(id:string, title:string):Promise<void>;
}

const AccommodationItem = ({accommodation, onDelete}:Props) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/accommodation/edit', {
            state:{
                id: accommodation.id
            }
        })
    }

    return(
        <Container>    
            <ImageContainer src={accommodation.imageURL || ""}></ImageContainer>
            <DataContainer onClick={handleEdit}>
                <Title>{accommodation.title}</Title>
                <Arrival><TodayIcon /><Moment format="DD-MM-YYYY">{accommodation.arrival}</Moment></Arrival>
                <Departure><TodayIcon /><Moment format="DD-MM-YYYY">{accommodation.departure}</Moment></Departure>                             
            </DataContainer>     
            <Action onClick={() => onDelete(accommodation.id, accommodation.title)} ><ClearIcon className="icon-item" /></Action>      
        </Container>
    );
}

export default AccommodationItem;