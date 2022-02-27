import React from 'react';
import { LinkContainer, Text } from './style';

interface Props{
    path: string;
    text: string;
    icon: any;
}

const LinkItem = ({path, text, icon} : Props) => {
    return(
        <LinkContainer to={path}>
            {icon}
            <Text>{text}</Text>
        </LinkContainer>
    );
}

export default LinkItem;