import React from 'react';
import Moment from 'react-moment';
import { Container, ImageContainer, DataContainer, Title, Description, DateInitial, DateEnd, DateRemain, Action } from './style';
import ClearIcon from '@material-ui/icons/Clear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';

interface Props{
    title: string;
    description: string;
    start_date: string;
    end_date: string;
}

const EventItem = ({title, description, start_date, end_date}:Props) => {
    const handleEdit = () => {
        console.log('Navigate Edit');
    }

    const handleDelete = () => {
        if(window.confirm(`Delete this event? ${title}`)) console.log('Deleted Item');
    }

    return(
        <Container onClick={handleEdit}>    
            <ImageContainer src=""></ImageContainer>
            <DataContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>         
                <DateInitial><TodayIcon /><Moment format="DD-MM-YYYY">{start_date}</Moment></DateInitial>
                <DateEnd><TodayIcon /><Moment format="DD-MM-YYYY">{end_date}</Moment></DateEnd>
                <DateRemain><AccessTimeIcon /><Moment diff={new Date(Date.now())} unit="days">{start_date}</Moment>days</DateRemain>
                <Action onClick={handleDelete} ><ClearIcon className="icon-item" /></Action>
            </DataContainer>
        </Container>
    );
}

export default EventItem;