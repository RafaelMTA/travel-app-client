import { useEffect, useState } from 'react';
import { Container, Form, Button } from './style';
import InputLabel from 'components/Custom-Elements/inputLabel';

interface Props{
    type:string;
    onSubmit(e:React.FormEvent<HTMLFormElement>, data: object):void;
    repositoryData?: object;
} 

const AccommodationForm = ({type, onSubmit, repositoryData}: Props) => {
    const [data, setData] = useState({
        id: '',
        title: '',
        description: '',
        arrival: '',
        departure: '',
        address: ''
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
                <InputLabel label="title" type="text" id="title" value={data.title || ""} onChange={handleChange} required />
                <InputLabel label="description" type="textarea" id="description" value={data.description || ""} onChange={handleChange} required />
                <InputLabel label="address" type="text" id="address" value={data.address || ""} onChange={handleChange} required />
                <InputLabel label="arrival" type="date" id="arrival" value={data.arrival || ""} onChange={handleChange} required />
                <InputLabel label="departure" type="date" id="departure" value={data.departure || ""} onChange={handleChange} required />
                <Button>{type}</Button>
            </Form>
        </Container>
    );
}

export default AccommodationForm;