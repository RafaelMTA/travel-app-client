import { Container, Input, Label } from './style';

interface Props{
    label: string;
    id: string;
    type: string;
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputLabel = ({label, id, type, value, onChange}:Props) => {
    return(
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input type={type} id={id} value={value} onChange={onChange} />
        </Container>
    );
}

export default InputLabel;