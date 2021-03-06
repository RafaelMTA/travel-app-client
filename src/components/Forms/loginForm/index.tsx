import React, {useState} from 'react';

import InputIcon from 'components/Custom-Elements/inputIcon';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { Form, Title, SignIn, Hr, Register } from './style';

interface Props{
    onSubmit(e: React.FormEvent<HTMLFormElement>, email:string, password:string): void;
}

const LoginForm = ({onSubmit}:Props) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Form onSubmit={e => onSubmit(e, email, password)}>
            <Title>Login</Title>
            <Hr />
            <InputIcon 
                type="text" 
                id="email" 
                placeholder="Email" 
                icon={<EmailIcon />} 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required
            />
            <InputIcon 
                type="password" 
                id="password" 
                placeholder="Password" 
                icon={<LockIcon />} 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
            />
            <Register to="/register">Don't have an account? Sign up</Register>
            <SignIn>Sign In</SignIn>
        </Form>          
    );
}

export default LoginForm;