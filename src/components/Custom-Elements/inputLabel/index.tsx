import React from 'react';
import { Container, Input, TextArea, Label } from './style';

interface Props{
    label: string;
    id: string;
    type: string;
    value: string;
    required?: boolean;
    onChange(e: React.ChangeEvent): void;
}

const InputLabel = ({label, id, type, value, required, onChange}:Props) => {
    return(
        <Container>
            <Label htmlFor={id}>{label}</Label>
            {type === "textarea" ? 
                <TextArea id={id} name={id} value={value} onChange={onChange} required={required} /> 
                : 
                <Input type={type} id={id} name={id} value={value} onChange={onChange} required={required} /> 
            }
            
        </Container>
    );
}

export default InputLabel;