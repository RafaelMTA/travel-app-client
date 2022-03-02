import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from './style';
import InputLabel from 'components/Custom-Elements/inputLabel';

interface Props{
    type:string;
    onSubmit(e:React.FormEvent<HTMLFormElement>, data: object):void;
    repositoryData?: object;
} 

const PaxForm = ({type, onSubmit, repositoryData}: Props) => {
    const [data, setData] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        occupation: '',
        address: '',
        birthday: '',
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
        <Container>
            <Form onSubmit={e => onSubmit(e, data!)}>
                <InputLabel label="name" type="text" id="name" value={data.name || ""} onChange={handleChange} required />
                <InputLabel label="surname" type="text" id="surname" value={data.surname || ""} onChange={handleChange} required />
                <InputLabel label="email" type="email" id="email" value={data.email || ""} onChange={handleChange} required />
                <InputLabel label="occupation" type="text" id="occupation" value={data.occupation || ""} onChange={handleChange} required />
                <InputLabel label="address" type="text" id="address" value={data.address || ""} onChange={handleChange} required />
                <InputLabel label="birthday" type="date" id="birthday" value={data.birthday || ""} onChange={handleChange} required />
                <Button>{type}</Button>
            </Form>
        </Container>
    );
}

export default PaxForm;