import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from 'pages/login';
import Event from 'pages/event';
import Accommodation from 'pages/accommodation';
import Pax from 'pages/pax';
import Profile from 'pages/profile';
import Transport from 'pages/transport';
import Service from 'pages/service';

import { AuthProvider } from 'context/AuthContext';
import { useAuth } from 'hooks/useAuth';

const AppRoutes = () => {
    const Private = ({children}:{ children:JSX.Element }) => {
        const auth = useAuth();

        // if(!auth.token) return(<Navigate to="/login" />);

        return children;
    }

    return(
        <Router>
            <AuthProvider>       
                <Routes>                  
                    <Route path="/login" element={<Login />} />                    
                    <Route path="/" element={<Private><Event /></Private>} />
                    <Route path="/accommodation" element={<Private><Accommodation /></Private>} />
                    <Route path="/pax" element={<Private><Pax /></Private>} />
                    <Route path="/profile" element={<Private><Profile /></Private>} />
                    <Route path="/transport" element={<Private><Transport /></Private>} />
                    <Route path="/service" element={<Private><Service /></Private>} />             
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;