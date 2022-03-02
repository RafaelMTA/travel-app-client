import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';

import TransportRepository from 'components/Repositories/transport';
import RepositoryTemplate from 'components/Template/Repository';

const Transport = () => {
    const fetch = useFetch();
    const evt = useEvent();   

    useEffect(() => {
        (async() => await loadData())();
    }, []);

    const loadData = async () => {
        await fetch.execute("GET", {eventId: evt.eventId!, table: "transport"});
    }

    const handleDelete = async(id:string, title:string) => {
        const confirm = window.confirm("Delete transport? " + title);
        if (confirm){
            if(id) await fetch.execute("DELETE", {eventId: evt.eventId!, table: "transport", tableId: id});
            await loadData();
        }      
    }

    if(fetch.loading) return (<>Loading</>);

    return (
        <RepositoryTemplate addPath='new'><TransportRepository repository={fetch.response} onDelete={handleDelete} /></RepositoryTemplate>
    );
}

export default Transport;