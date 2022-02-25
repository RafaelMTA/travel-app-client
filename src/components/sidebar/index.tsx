import React from 'react';
import { NavContainer, NavBody, NavList, NavFooter } from './style';

import ImageText from 'components/imageText';
import LinkItem from 'components/linkItem';

import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import HotelIcon from '@material-ui/icons/Hotel';
import EventIcon from '@material-ui/icons/Event';

import { useAuth } from 'hooks/useAuth';

const Sidebar = () => {
    const auth = useAuth();
    
    return(
        <NavContainer>
            <NavBody>
                <NavList>
                    <LinkItem path="/profile" text="Charles" icon={<ImageText src="https://randomuser.me/api/portraits/thumb/men/29.jpg" />}></LinkItem>
                    <hr />
                    <LinkItem path="/" text="Home" icon={<HomeIcon className="icon-item" />}></LinkItem>
                    <LinkItem path="/event" text="Event" icon={<EventIcon className="icon-item" />}></LinkItem>
                    <LinkItem path="/pax" text="Pax" icon={<PeopleAltRoundedIcon className="icon-item" />}></LinkItem>
                    <LinkItem path="/transport" text="Transport" icon={<DirectionsCarIcon className="icon-item" />}></LinkItem>
                    <LinkItem path="/accommodation" text="Accommodation" icon={<HotelIcon className="icon-item" />}></LinkItem>
                    <LinkItem path="/service" text="Service" icon={<ShoppingCartIcon className="icon-item" />}></LinkItem>              
                </NavList>                          
                <NavFooter>       
                    <hr />        
                    <span onClick={auth.logout}><ExitToAppRoundedIcon className="icon-item" /><p>Logout</p></span>
                </NavFooter>
            </NavBody>
        </NavContainer>
    );
}

export default Sidebar;