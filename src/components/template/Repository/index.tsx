import useSearch from 'hooks/useSearch';
import { Container, SearchContainer, Button } from './style';
import InputIcon from 'components/Custom-Elements/inputIcon';

import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';

interface Props{
    placeholder: string;
    addPath: string;
    onSearch(query:string): void;
}

const Repository = ({placeholder, addPath, onSearch}:Props) => {
    const { search, setSearch } = useSearch();
    
    return( 
        <Container>
            <SearchContainer>
                <InputIcon 
                    type="text" 
                    id="search" 
                    placeholder={placeholder} 
                    icon={<SearchIcon />} 
                    value={search} 
                    onChange={e => setSearch(e.target.value)} 
                    buttonIcon={<ArrowForwardIcon />}
                    bgColor="linear-gradient(to right, #6a9113, #141517)"
                    onClick={() => onSearch(search)}
                />
            </SearchContainer>
            <Button to={addPath}><AddIcon className="btn-icon" /></Button>
        </Container>
    )
}

export default Repository;