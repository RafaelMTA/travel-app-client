import React from 'react';

import Sidebar from 'components/Custom-Elements/sidebar';
import Header from 'components/Custom-Elements/header';

import { Container, Aside, Head, Body } from './style';

import { useEvent } from 'hooks/useEvent';

const Template = ({children}:{ children:JSX.Element }) => {
    const event = useEvent();
    const handleHome = (e:React.MouseEvent) => {
        e.preventDefault();
        event.clear();
    }

    return(
        <>   
        <Container>          
            <Head>
                <Header imagePath='' title='Travel-App' onClick={() => handleHome} />
            </Head>
            <Aside>             
                <Sidebar />
            </Aside>
            <Body>
                {children}
            </Body>
        </Container>
        </>
    );
}

export default Template;