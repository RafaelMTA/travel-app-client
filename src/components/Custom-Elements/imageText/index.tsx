import {ImageContainer, Image} from './style';

interface Props{
    src:string;
}

const ImageText = ({src}:Props) => {
    return (
        <ImageContainer>
            <Image src={src} />
        </ImageContainer>
    );
}

export default ImageText;