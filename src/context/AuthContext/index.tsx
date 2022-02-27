import { useEvent } from 'hooks/useEvent';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenLocalStorage, LoginRequest, setTokenLocalStorage } from './utils';

export interface IContext{
    authenticated: boolean;
    token?: string | null;
    loading: boolean;
    login: (email:string, password:string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    const navigate = useNavigate();
    const event = useEvent();
    const [token, setToken] = useState<string | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getTokenLocalStorage();
        if(token) setToken(token);
        setLoading(false);
    }, []);

    const login = async(email:string, password:string) => {
        const response = await LoginRequest(email, password);
        const token = response.token;
        setToken(token);
        setTokenLocalStorage(token);
        navigate("/");
    }

    const logout = async() => {
        setToken(null);
        setTokenLocalStorage(null);
        event.clear();
        navigate("/login");
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!token,
                token,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
