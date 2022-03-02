import { Container, ContainerHeader, ContainerBody, Logo, Title } from './style';

interface Props{
    imagePath: string;
    title: string;
    children?: JSX.Element;
}

const Header = ({imagePath, title, children}:Props) => { 
    return(
        <Container>
            <ContainerHeader >
                <Logo src={imagePath} />
                <Title>{title}</Title>              
            </ContainerHeader>
            <ContainerBody>
                {children}
            </ContainerBody>
        </Container>
    );
}

export default Header;