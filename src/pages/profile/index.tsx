import Template from 'components/Template';
import ProfileForm from 'components/Forms/profileForm';
import { useAuth } from 'hooks/useAuth';
import { IUser } from 'interfaces/User';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
    const auth = useAuth();  
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, data: IUser) => { 
        e.preventDefault();
        await auth.updateProfile(data.email, data.imageURL);
        navigate('/');
    }

    return (
        <Template><ProfileForm repositoryData={auth.user!} onSubmit={handleSubmit} /></Template>
    );
}

export default Accommodation;