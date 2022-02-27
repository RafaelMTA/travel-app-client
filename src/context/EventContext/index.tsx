import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEventLocalStorage, setEventLocalStorage } from './utils';

export interface IContext{
    event?: string | null;
    loading: boolean;
    clear: () => void;
    set: (event:string) => void;
}

export const EventContext = createContext<IContext>({} as IContext);

export const EventProvider = ({children}:{children:JSX.Element}) => {
    const navigate = useNavigate();
    const [event, setEvent] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const event = getEventLocalStorage();
        setEvent(event);
        setLoading(false);
    }, []);

    const clear = () => {
        setEvent(null);
        setEventLocalStorage(null);
        navigate('/');
    }

    const set = (event:string) => {
        setEvent(event);
        setEventLocalStorage(event);
        navigate('/dashboard');
    }

    return (
        <EventContext.Provider
            value={{
                event,
                loading,
                clear,
                set
            }}
        >
            {children}
        </EventContext.Provider>
    );
}
