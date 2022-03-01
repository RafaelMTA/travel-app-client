import { Container, Title, Content, Header, Close } from './style';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

interface Props{
    title: string;
    children: JSX.Element;
}

const Modal = ({title, children}:Props) => {  
    const [show, setShow] = useState(false);
  
    const handleOpen = () => {
        setShow(true);
    }

    const handleClose = () => {
        console.log('clicked close');
        setShow(false);
    }

    return(
        <Container>
            <Header>
                <Title>{title}</Title>
                <Close onClick={handleClose}><CloseIcon className="btn-icon" /></Close>
            </Header>
            <hr />
            <Content>{children}</Content>
        </Container>
    );
}

export default Modal;