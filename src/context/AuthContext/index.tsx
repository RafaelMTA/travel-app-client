import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenLocalStorage, LoginRequest, setTokenLocalStorage } from './utils';

export interface IContext{
    authenticated: boolean;
    token?: string;
    login: (email:string, password:string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>();

    useEffect(() => {
        const token = getTokenLocalStorage();
        if(token) setToken(token);
        console.log("token: " + !!token);
    }, []);

    const login = async(email:string, password:string) => {
        const response = await LoginRequest(email, password);
        const token = response.token;
        setToken(token);
        setTokenLocalStorage(token);
        navigate("/");
    }

    const logout = async() => {
        setToken('');
        setTokenLocalStorage('');
        navigate("/login");
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!token,
                token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
