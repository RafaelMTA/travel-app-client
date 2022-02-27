import { Container, ContainerHeader, ContainerSearch, Logo, Title } from './style';
import { useState } from 'react';

import InputIcon from 'components/Custom-Elements/InputIcon';

import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useSearch from 'hooks/useSearch';

interface Props{
    imagePath: string;
    title: string;
    onClick(): void;
}

const Header = ({imagePath, title, onClick}:Props) => { 
    return(
        <Container>
            <ContainerHeader onClick={onClick}>
                <Logo src={imagePath} />
                <Title>{title}</Title>
            </ContainerHeader>
        </Container>
    );
}

export default Header;