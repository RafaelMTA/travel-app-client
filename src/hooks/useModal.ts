import { useEffect, useState } from 'react';

const useModal = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState<JSX.Element | null>();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(false);
    }, []);

    const close = () => {
        setTitle('');
        setContent(null);
        setShow(false);
    }

    return {
        title, 
        setTitle, 
        content, 
        setContent, 
        show,
        setShow,
        close
    };
}

export default useModal;