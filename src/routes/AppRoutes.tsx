import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from 'pages/login';
import Event from 'pages/event';
import Accommodation from 'pages/accommodation';
import Pax from 'pages/pax';
import Profile from 'pages/profile';
import Transport from 'pages/transport';
import Service from 'pages/service';
import Dashboard from 'pages/dashboard';

import EventFormEdit from 'components/Forms/eventForm/edit'
import EventFormNew from 'components/Forms/eventForm/new'

import { AuthProvider } from 'context/AuthContext';
import { EventProvider } from 'context/EventContext';

import { useAuth } from 'hooks/useAuth';
import { useEvent } from 'hooks/useEvent';

import Template from 'components/template';

import { Loading } from './style';

const AppRoutes = () => {
    const Private = ({children}:{ children:JSX.Element }) => {
        const auth = useAuth();

        if(auth.loading) return (<Loading>Loading...</Loading>);
        if(!auth.authenticated) return(<Navigate to="/login" />);
        
        return (<Template>{children}</Template>);
    }

    const EventPrivate = ({children}:{ children:JSX.Element }) => {
        const event = useEvent();

        if(event.loading) return (<Loading>Loading...</Loading>);

        return (<Private>{children}</Private>);
    }

    return(
        <Router>
            <AuthProvider>  
                <EventProvider>   
                    <Routes>                  
                        <Route path="/login" element={<Login />} />             

                        <Route path="/" element={<Private><Event /></Private>} />
                        <Route path="/profile" element={<Private><Profile /></Private>} />
                        
                        <Route path="/dashboard" element={<EventPrivate><Dashboard /></EventPrivate>} />
                        <Route path="/accommodation" element={<EventPrivate><Accommodation /></EventPrivate>} />
                        <Route path="/pax" element={<EventPrivate><Pax /></EventPrivate>} />                       
                        <Route path="/transport" element={<EventPrivate><Transport /></EventPrivate>} />
                        <Route path="/service" element={<EventPrivate><Service /></EventPrivate>} />      

                        <Route path="/event-formNew" element={<EventPrivate><EventFormNew /></EventPrivate>} />
                        <Route path="/event-formEdit" element={<EventPrivate><EventFormEdit /></EventPrivate>} />           
                    </Routes>
                </EventProvider>  
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;