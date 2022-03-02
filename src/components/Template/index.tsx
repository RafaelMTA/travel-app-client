import Sidebar from 'components/Custom-Elements/sidebar';
import Header from 'components/Custom-Elements/header';

import { Container, Aside, Head, Body } from './style';

const Template = ({children}:{ children:JSX.Element }) => {
    return( 
        <Container>          
            <Head>
                <Header imagePath='' title='Travel-App'/>
            </Head>
            <Aside>             
                <Sidebar />
            </Aside>
            <Body>
                {children}
            </Body>
        </Container>
    );
}

export default Template;