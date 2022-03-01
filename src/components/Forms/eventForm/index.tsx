import React, { useState } from 'react';
import { Container, Form, InputContainer, Button } from './style';
import InputLabel from 'components/Custom-Elements/inputLabel';

interface Props{
    onSubmit(e:React.FormEvent<HTMLFormElement>, data: object):void;
} 

const EventForm = ({onSubmit}: Props) => {
    const [data, setData] = useState({
        title: '',
        description: '',
        start_date: '',
        end_date: '',      
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setData(prevData => ({...prevData, [e.target.name]: e.target.value}));
    }

    return(
        <Container>
            <Form onSubmit={e => onSubmit(e, data)}>
                <InputContainer>
                    <InputLabel label="title" type="text" id="title" value={data.title} onChange={handleChange} />
                </InputContainer>
                <InputContainer>
                    <InputLabel label="description" type="text" id="description" value={data.title} onChange={handleChange} />
                </InputContainer>
                <InputContainer>
                    <InputLabel label="Starting Date" type="date" id="start_date" value={data.title} onChange={handleChange} />
                </InputContainer>
                <InputContainer>
                    <InputLabel label="Ending Date" type="date" id="end_date" value={data.title} onChange={handleChange} />
                </InputContainer>
                <Button>EDIT</Button>
            </Form>
        </Container>
    );
}

export default EventForm;