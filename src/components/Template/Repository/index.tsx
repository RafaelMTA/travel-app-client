import { Container, Head, Aside, Body, Button } from './style';

import Sidebar from 'components/Custom-Elements/sidebar';
import Header from 'components/Custom-Elements/header';
import InputSearch from 'components/Custom-Elements/InputSearch';

import AddIcon from '@material-ui/icons/Add';

interface Props{
    addPath: string;
    children: JSX.Element;
}

const RepositoryTemplate = ({addPath, children}:Props) => {
    return( 
        <Container>
            <Head>
                <Header imagePath='' title='Travel-App' ></Header>
            </Head>
            <Aside>             
                <Sidebar />
            </Aside>
            <Body>              
                {children}
                <Button to={addPath}><AddIcon className="btn-icon" /></Button>
            </Body>
        </Container>
    )
}

export default RepositoryTemplate;