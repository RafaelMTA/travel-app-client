import React, { useEffect, useState } from 'react';
import { Form, Button } from './style';
import InputLabel from 'components/Custom-Elements/inputLabel';
import Template from 'components/Template/index';
import { IUser } from 'interfaces/User';

interface Props{
    onSubmit(e:React.FormEvent<HTMLFormElement>, data: object):void;
    repositoryData?: IUser;
} 

const ProfileForm = ({onSubmit, repositoryData}: Props) => {
    const [data, setData] = useState({
        id: '',
        email: '',
        imageURL: '',
        password: '',
        confirmPassword: '',      
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
                <InputLabel label="email" type="email" id="email" value={data.email || ""} onChange={handleChange} required />
                <InputLabel label="profile image" type="text" id="imageURL" value={data.imageURL || ""} onChange={handleChange} />           
                <Button>EDIT</Button>
            </Form>
        </Template>
    );
}

export default ProfileForm;