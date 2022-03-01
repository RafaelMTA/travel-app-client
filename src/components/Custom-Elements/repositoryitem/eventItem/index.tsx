import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';

import { Container, ImageContainer, DataContainer, Title, Description, DateInitial, DateEnd, DateRemain, Action } from './style';

import ClearIcon from '@material-ui/icons/Clear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';

import {repositoryDelete} from 'service/api';
import { useEvent } from 'hooks/useEvent';

interface Props{
    id: string;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
}

const EventItem = ({id, title, description, start_date, end_date}:Props) => {
    const navigate = useNavigate();
    const evt = useEvent();

    const handleDashboard = () => {
        evt.set(id);
        navigate('/dashboard');
    }

    const handleDelete = async() => {
        if(!evt.eventId) await repositoryDelete(evt.eventId!);
    }

    return(
        <Container>    
            <ImageContainer src=""></ImageContainer>
            <DataContainer onClick={handleDashboard}>
                <Title>{title}</Title>
                <Description>{description}</Description>         
                <DateInitial><TodayIcon /><Moment format="DD-MM-YYYY">{start_date}</Moment></DateInitial>
                <DateEnd><TodayIcon /><Moment format="DD-MM-YYYY">{end_date}</Moment></DateEnd>
                <DateRemain><AccessTimeIcon /><Moment diff={new Date(Date.now())} unit="days">{start_date}</Moment>days</DateRemain>             
            </DataContainer>
            <Action onClick={handleDelete} ><ClearIcon className="icon-item" /></Action>
        </Container>
    );
}

export default EventItem;