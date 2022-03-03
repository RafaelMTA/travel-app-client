import { useEffect, useState } from 'react';
import { Form, Button } from './style';
import InputLabel from 'components/Custom-Elements/inputLabel';
import Template from 'components/Template/index';

interface Props{
    type:string;
    onSubmit(e:React.FormEvent<HTMLFormElement>, data: object):void;
    repositoryData?: object;
} 

const ServiceForm = ({type, onSubmit, repositoryData}: Props) => {
    const [data, setData] = useState({
        id: '',
        title: '',
        description: '',
        arrival: '',
        departure: '',
        address: '',
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
                <InputLabel label="address" type="text" id="address" value={data.address || ""} onChange={handleChange} required />
                <InputLabel label="arrival" type="date" id="arrival" value={data.arrival || ""} onChange={handleChange} required />
                <InputLabel label="departure" type="date" id="departure" value={data.departure || ""} onChange={handleChange} required />
                <InputLabel label="imageURL" type="text" id="imageURL" value={data.imageURL || ""} onChange={handleChange} />
                <Button>{type}</Button>
            </Form>
        </Template>
    );
}

export default ServiceForm;