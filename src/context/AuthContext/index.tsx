import { IUser } from 'interfaces/User';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenLocalStorage, getUserLocalStorage, LoginRequest, ProfileRequest, RegisterRequest, setTokenLocalStorage, setUserLocalStorage, UpdateProfile } from './utils';

export interface IContext{
    authenticated: boolean;
    token?: string | null;
    user?: IUser | null;
    loading: boolean;
    login: (email:string, password:string) => Promise<void>;
    register: (email: string, password:string, confirmPassword:string) => Promise<void>;
    logout: () => void;    
    updateProfile: (email: string, imageURL:string) => void;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>();
    const [user, setUser] = useState<IUser | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getTokenLocalStorage();
        if(token) setToken(token);
        const user = getUserLocalStorage();
        if(user) setUser(user);
        setLoading(false);
    }, []);

    const login = async(email:string, password:string) => {
        await LoginRequest(email, password)
        .then(response => {
            setToken(response.token);
            setTokenLocalStorage(response.token);
        })
        .then(() => {
            return ProfileRequest()        
        })
        .then(user => {
            setUser(user);
            setUserLocalStorage(user);
        })
        .then(() => navigate("/")   );
    }

    const logout = async() => {
        setToken(null);
        setTokenLocalStorage(null);
        setUser(null);
        setUserLocalStorage(null);      
        navigate("/login");
    }

    const register = async(email: string, password: string, confirmPassword: string) => {
        await RegisterRequest(email, password, confirmPassword).then(() => navigate("/login"));    
    }

    const updateProfile = async(email: string, imageURL:string) => {
        await UpdateProfile(email, imageURL);
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!token,
                token,
                user,
                loading,
                register,
                login,
                logout,
                updateProfile
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
