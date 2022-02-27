import React from 'react';
import Moment from 'react-moment';
import { Container, ImageContainer, DataContainer, Title, Description, DateInitial, DateEnd, DateRemain, Action } from './style';
import ClearIcon from '@material-ui/icons/Clear';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';

interface Props{
    id: string;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    onDelete: React.MouseEventHandler<HTMLSpanElement>;
    onEdit(id:string): void;
}

const EventItem = ({id, title, description, start_date, end_date, onDelete, onEdit}:Props) => {
    return(
        <Container>    
            <ImageContainer src=""></ImageContainer>
            <DataContainer onClick={() => onEdit(id)}>
                <Title>{title}</Title>
                <Description>{description}</Description>         
                <DateInitial><TodayIcon /><Moment format="DD-MM-YYYY">{start_date}</Moment></DateInitial>
                <DateEnd><TodayIcon /><Moment format="DD-MM-YYYY">{end_date}</Moment></DateEnd>
                <DateRemain><AccessTimeIcon /><Moment diff={new Date(Date.now())} unit="days">{start_date}</Moment>days</DateRemain>             
            </DataContainer>
            <Action onClick={onDelete} ><ClearIcon className="icon-item" /></Action>
        </Container>
    );
}

export default EventItem;