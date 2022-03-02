import { useNavigate } from 'react-router-dom';
import { Container, ImageContainer, DataContainer, Name, Email, Occupation, Action } from './style';
import ClearIcon from '@material-ui/icons/Clear';
import { useEvent } from 'hooks/useEvent';
import { Pax } from 'interfaces/Pax';

interface Props{
    pax: Pax; 
    onDelete(id:string, title:string):Promise<void>;
}

const PaxItem = ({pax, onDelete}:Props) => {
    const navigate = useNavigate();
    const evt = useEvent();

    const getFullName = pax.name + " " + pax.surname;

    const handleEdit = () => {
        navigate('/pax/edit', {
            state:{
                id: pax.id
            }
        })
    }

    return(
        <Container>    
            <ImageContainer src=""></ImageContainer>
            <DataContainer onClick={handleEdit}>
                <Name>{getFullName}</Name>
                <Email>{pax.email}</Email>  
                <Occupation>{pax.occupation}</Occupation>                               
            </DataContainer>     
            <Action onClick={() => onDelete(pax.id, getFullName)} ><ClearIcon className="icon-item" /></Action>      
        </Container>
    );
}

export default PaxItem;