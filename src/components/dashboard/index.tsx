import React from 'react';
import {Container} from './style';
import Sidebar from 'components/sidebar';

interface Props {
    eventID:string;
}

const Dashboard = ({eventID}:Props) => {
    return(
        <>
            <Sidebar />
            <Container>

            </Container>
        </>      
    );
}

export default Dashboard;