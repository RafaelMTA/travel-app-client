import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';

import AccommodationRepository from 'components/Repositories/accommodation';
import RepositoryTemplate from 'components/Template/Repository';

const Accommodation = () => {
    const fetch = useFetch();
    const evt = useEvent();   

    useEffect(() => {
        (async() => await loadData())();
    }, []);

    const loadData = async () => {
        await fetch.execute("GET", {eventId: evt.eventId!, table: "accommodation"});
    }

    const handleDelete = async(id:string, title:string) => {
        const confirm = window.confirm("Delete accommodation? " + title);
        if (confirm){
            if(id) await fetch.execute("DELETE", {eventId: evt.eventId!, table: "accommodation", tableId: id});
            await loadData();
        }      
    }

    if(fetch.loading) return (<>Loading</>);

    return (
        <RepositoryTemplate addPath='new'><AccommodationRepository repository={fetch.response} onDelete={handleDelete} /></RepositoryTemplate>
    );
}

export default Accommodation;