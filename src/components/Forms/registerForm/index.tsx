import { useState } from 'react';

import InputIcon from 'components/Custom-Elements/inputIcon';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { Form, Title, SignUp, Hr } from './style';

interface Props{
    onSubmit(e: React.FormEvent<HTMLFormElement>, email:string, password:string, confirmPassword:string): void;
}

const RegisterForm = ({onSubmit}:Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return(
        <Form onSubmit={e => onSubmit(e, email, password, confirmPassword)}>
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
             <InputIcon 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm Password" 
                icon={<LockIcon />} 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                required
            />
            <SignUp>Sign Up</SignUp>
        </Form>  
    );        
}

export default RegisterForm;