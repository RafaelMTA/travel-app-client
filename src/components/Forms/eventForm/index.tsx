import React, { useEffect, useState } from 'react';
import { Form, Button } from './style';
import InputLabel from 'components/Custom-Elements/inputLabel';
import Template from 'components/Template/index';

interface Props{
    type:string;
    onSubmit(e:React.FormEvent<HTMLFormElement>, data: object):void;
    repositoryData?: object;
} 

const EventForm = ({type, onSubmit, repositoryData}: Props) => {
    const [data, setData] = useState({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        imageURL: ''
    });

    useEffect(() => {
        if(repositoryData) {
            setData(data => ({...data, ...repositoryData}));
        }
    },[]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setData(prevData => ({...prevData, [e.target.name]: e.target.value}));
    }

    return(
        <Template>
            <Form onSubmit={e => onSubmit(e, data!)}>
                <InputLabel label="title" type="text" id="title" value={data.title || ""} onChange={handleChange} required />
                <InputLabel label="description" type="textarea" id="description" value={data.description || ""} onChange={handleChange} required />
                <InputLabel label="Starting Date" type="datetime-local" id="start_date" value={data.start_date || ""} onChange={handleChange} required />
                <InputLabel label="Ending Date" type="datetime-local" id="end_date" value={data.end_date || ""} onChange={handleChange} required />
                <InputLabel label="imageURL" type="text" id="imageURL" value={data.imageURL || ""} onChange={handleChange} />
                <Button>{type}</Button>
            </Form>
        </Template>
    );
}

export default EventForm;