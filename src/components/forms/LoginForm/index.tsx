import React, {useState, useRef, useEffect, useContext, DetailedHTMLProps, FormHTMLAttributes} from 'react';

import InputIcon from 'components/InputIcon';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { Form, Title, SignIn, Hr } from './style';
import { useAuth } from 'hooks/useAuth';

const LoginForm = () => {
    const auth = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        
    }, []);

    const handleSubmit = async(e: React.FormEvent) => {    
        try{
            e.preventDefault();
            await auth.login(email, password);
            setEmail('');
            setPassword('');
        }catch(error){
            alert('Invalid email or password');
        }
    }

    return(
        <Form>
            <Title>Login</Title>
            <Hr />
            <InputIcon 
                type="text" 
                id="email" 
                placeholder="Email" 
                icon={<EmailIcon />} 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
            <InputIcon 
                type="password" 
                id="password" 
                placeholder="Password" 
                icon={<LockIcon />} 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <SignIn onClick={handleSubmit}>Sign In</SignIn>
        </Form>          
    );
}

export default LoginForm;