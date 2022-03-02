import { useEffect } from 'react';
import PaxRepository from 'components/Repositories/pax';
import RepositoryTemplate from 'components/Template/Repository';
import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';

const Pax = () => {
    const fetch = useFetch();
    const evt = useEvent();   
    
    useEffect(() => {
        (async() => await loadData())();
    }, []);

    const loadData = async () => {
        await fetch.execute("GET", {eventId: evt.eventId!, table: "pax"});
    }

    const handleDelete = async(id:string, title:string) => {
        const confirm = window.confirm("Delete pax? " + title);
        if (confirm){
            if(id) await fetch.execute("DELETE", {eventId: evt.eventId!, table: "pax", tableId: id});
            await loadData();
        }      
    }

    if(fetch.loading) return (<>Loading</>);
    
    return (
        <RepositoryTemplate addPath='new'><PaxRepository repository={fetch.response} onDelete={handleDelete} /></RepositoryTemplate>
    );
}

export default Pax;