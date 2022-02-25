import React from 'react';
import { Container, Icon } from './style';

interface Props{
    type: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    icon: any;
    buttonIcon?: any;
}

const InputIcon = ({type, id, placeholder, value, onChange, onClick, icon, buttonIcon} : Props) => {
    return(
        <Container> 
            <input 
                type={type} 
                name={id} 
                id={id} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}   
            />
            <Icon>{icon}</Icon>       
            {buttonIcon ? <button onClick={onClick}>{buttonIcon}</button> : ""}         
        </Container>      
    );
}

export default InputIcon;