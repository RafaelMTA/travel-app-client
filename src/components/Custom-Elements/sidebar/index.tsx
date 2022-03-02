import React from 'react';
import { NavContainer, NavHeader } from './style';

import ImageText from 'components/Custom-Elements/imageText';
import LinkItem from 'components/Custom-Elements/linkItem';

import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HotelIcon from '@material-ui/icons/Hotel';
import EventIcon from '@material-ui/icons/Event';

import { useAuth } from 'hooks/useAuth';
import { useEvent } from 'hooks/useEvent';

const Sidebar = () => {
    const auth = useAuth();
    const evt = useEvent();
    
    return(     
        <NavContainer>
            <NavHeader>
                <div>
                    <LinkItem path="/profile" text="Charles" icon={<ImageText src="https://randomuser.me/api/portraits/thumb/men/29.jpg" />}></LinkItem>
                    <hr />     
                    <LinkItem path="/" text="Home" icon={<HomeIcon className="icon-item" />}></LinkItem>               
                    {evt.eventId && 
                    <>                                       
                        <LinkItem path="/event/edit" text="Event" icon={<EventIcon className="icon-item" />}></LinkItem>
                        <LinkItem path="/pax" text="Pax" icon={<PeopleAltRoundedIcon className="icon-item" />}></LinkItem>
                        <LinkItem path="/transport" text="Transport" icon={<DirectionsCarIcon className="icon-item" />}></LinkItem>
                        <LinkItem path="/accommodation" text="Accommodation" icon={<HotelIcon className="icon-item" />}></LinkItem>
                        <LinkItem path="/service" text="Service" icon={<ShoppingCartIcon className="icon-item" />}></LinkItem>  
                    </>}                               
                </div>                          
                <div>       
                    <hr />        
                    <span onClick={auth.logout}><ExitToAppRoundedIcon className="icon-item" /><p>Logout</p></span>
                </div>
            </NavHeader>          
        </NavContainer>    
    );
}

export default Sidebar;