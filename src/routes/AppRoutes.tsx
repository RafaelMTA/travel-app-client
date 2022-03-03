import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from 'pages/login';
import Register from 'pages/register';
import Event from 'pages/event';
import Accommodation from 'pages/accommodation';
import Pax from 'pages/pax';
import Profile from 'pages/profile';
import Transport from 'pages/transport';
import Service from 'pages/service';

import EventFormEdit from 'components/Forms/eventForm/edit'
import EventFormNew from 'components/Forms/eventForm/new'

import PaxFormEdit from 'components/Forms/paxForm/edit'
import PaxFormNew from 'components/Forms/paxForm/new'

import AccommodationFormEdit from 'components/Forms/accommodationForm/edit'
import AccommodationFormNew from 'components/Forms/accommodationForm/new'

import ServiceFormEdit from 'components/Forms/serviceForm/edit'
import ServiceFormNew from 'components/Forms/serviceForm/new'

import TransportFormEdit from 'components/Forms/transportForm/edit'
import TransportFormNew from 'components/Forms/transportForm/new'

import { AuthProvider } from 'context/AuthContext';
import { EventProvider } from 'context/EventContext';

import { useAuth } from 'hooks/useAuth';
import { useEvent } from 'hooks/useEvent';

import { Loading } from './style';

const AppRoutes = () => {
    const Private = ({children}:{ children:JSX.Element }) => {
        const auth = useAuth();
        const event = useEvent();

        if(auth.loading) return (<Loading>Loading...</Loading>);
        if(!auth.authenticated) return(<Navigate to="/login" />);
        if(event.loading) return (<Loading>Loading...</Loading>);

        return children;
    }

    return(
        <Router>
            <AuthProvider>  
                <EventProvider>   
                    <Routes>                  
                        <Route path="/login" element={<Login />} />             
                        <Route path="/register" element={<Register />} />       

                        <Route path="/" element={<Private><Event /></Private>} />
                        <Route path="/profile" element={<Private><Profile /></Private>} />
                        
                        <Route path="/accommodation" element={<Private><Accommodation /></Private>} />
                        <Route path="/pax" element={<Private><Pax /></Private>} />                       
                        <Route path="/transport" element={<Private><Transport /></Private>} />
                        <Route path="/service" element={<Private><Service /></Private>} />      

                        <Route path="/event/new" element={<Private><EventFormNew /></Private>} />
                        <Route path="/event/edit" element={<Private><EventFormEdit /></Private>} />        

                        <Route path="/pax/new" element={<Private><PaxFormNew /></Private>} />
                        <Route path="/pax/edit" element={<Private><PaxFormEdit /></Private>} />     

                        <Route path="/accommodation/new" element={<Private><AccommodationFormNew /></Private>} />
                        <Route path="/accommodation/edit" element={<Private><AccommodationFormEdit /></Private>} />   

                        <Route path="/service/new" element={<Private><ServiceFormNew /></Private>} />
                        <Route path="/service/edit" element={<Private><ServiceFormEdit /></Private>} />   

                        <Route path="/transport/new" element={<Private><TransportFormNew /></Private>} />
                        <Route path="/transport/edit" element={<Private><TransportFormEdit /></Private>} />   
                    </Routes>
                </EventProvider>  
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;