import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEventLocalStorage, setEventLocalStorage } from './utils';

export interface IContext{
    eventId?: string | null;
    loading: boolean;
    clear: () => void;
    set: (event:string) => void;
}

export const EventContext = createContext<IContext>({} as IContext);

export const EventProvider = ({children}:{children:JSX.Element}) => {
    const navigate = useNavigate();
    const [eventId, setEventId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const eventId = getEventLocalStorage();
        setEventId(eventId);
        setLoading(false);
    }, []);

    const clear = () => {
        setEventId(null);
        setEventLocalStorage(null);
        navigate('/');
    }

    const set = (eventId:string) => {
        setEventId(eventId);
        setEventLocalStorage(eventId);
        navigate('/dashboard');
    }

    return (
        <EventContext.Provider
            value={{
                eventId,
                loading,
                clear,
                set
            }}
        >
            {children}
        </EventContext.Provider>
    );
}
