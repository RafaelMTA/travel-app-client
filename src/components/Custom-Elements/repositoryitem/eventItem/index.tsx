import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';

import { Container, ImageContainer, DataContainer, Title, Description, DateInitial, DateEnd, DateRemain, Action } from './style';

import ClearIcon from '@material-ui/icons/Clear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';

import { useEvent } from 'hooks/useEvent';
import { IEvent } from 'interfaces/Event';

interface Props{
    event: IEvent;
    onDelete(id:string, title:string):Promise<void>;
}

const EventItem = ({event, onDelete}:Props) => {
    const navigate = useNavigate();
    const evt = useEvent();

    const handleDashboard = () => {
        evt.set(event.id);
        navigate('/dashboard');
    }

    return(
        <Container>    
            <ImageContainer src=""></ImageContainer>
            <DataContainer onClick={handleDashboard}>
                <Title>{event.title}</Title>
                <Description>{event.description}</Description>         
                <DateInitial><TodayIcon /><Moment format="DD-MM-YYYY">{event.start_date}</Moment></DateInitial>
                <DateEnd><TodayIcon /><Moment format="DD-MM-YYYY">{event.end_date}</Moment></DateEnd>
                <DateRemain><AccessTimeIcon /><Moment diff={new Date(Date.now())} unit="days">{event.start_date}</Moment>days</DateRemain>             
            </DataContainer>
            <Action onClick={() => onDelete(event.id, event.title)} ><ClearIcon className="icon-item" /></Action>
        </Container>
    );
}

export default EventItem;