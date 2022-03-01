import React from 'react';
import { Navigate } from 'react-router-dom';

import LoginForm from 'components/Forms/loginForm';

import { useAuth } from 'hooks/useAuth';

import { Container } from './style';

const Login = () => {
    const auth = useAuth();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, email:string, password:string) => {    
        try{
            e.preventDefault();
            await auth.login(email, password);
        }catch(error){
            alert('Invalid email or password');
        }
    }

    if(auth.authenticated) return(<Navigate to="/" />);

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit}></LoginForm>
        </Container>    
    );
}

export default Login;