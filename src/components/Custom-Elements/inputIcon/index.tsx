import React from 'react';

import { Container, Icon, Input, Button } from './style';

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

const InputIcon = ({type, id, placeholder, value, onChange, onClick, icon, buttonIcon, required} : Props) => {
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