import React from 'react';
import styled from 'styled-components';

import { Container, Icon, Input } from './style';

interface Props{
    type: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    icon: any;
    buttonIcon?: any;
    bgColor?: string;
    required?: boolean;
}

const InputIcon = ({type, id, placeholder, value, onChange, onClick, icon, buttonIcon, bgColor, required} : Props) => {
    const Button = styled.button`
        cursor: pointer;
        width: 3em;
        height: 3em;
        box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.8);
        opacity: 0.9;
        border: 0;
        border-radius: 0px 10px 10px 0px;
        outline: 0;

        color: white;
        transition: .5s;

        background: ${bgColor};

        &:hover{
            opacity: 1;
        }
    `;

    return(
        <Container> 
            <Input 
                type={type} 
                name={id} 
                id={id} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}  
                required={required} 
            />
            <Icon>{icon}</Icon>       
            {buttonIcon ? <Button onClick={onClick}>{buttonIcon}</Button> : ""}         
        </Container>      
    );
}

export default InputIcon;