import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/Forms/registerForm';
import { useAuth } from 'hooks/useAuth';
import { Container } from './style';

const Register = () => {
    const {authenticated, register} = useAuth();

    const handleRegistrarion = async(e: React.FormEvent<HTMLFormElement>, email:string, password:string, confirmPassword:string) => {
        try{
            e.preventDefault();
            await register(email, password, confirmPassword);
        }catch(error){
            alert('Error on registration');
        }    
    }

    if(authenticated) return(<Navigate to="/" />);

    return(
        <Container>
            <RegisterForm onSubmit={handleRegistrarion} />
        </Container> 
    );
}

export default Register;