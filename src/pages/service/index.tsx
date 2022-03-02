import { useEvent } from 'hooks/useEvent';
import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';

import ServiceRepository from 'components/Repositories/service';
import RepositoryTemplate from 'components/Template/Repository';

const Service = () => {
    const fetch = useFetch();
    const evt = useEvent();   

    useEffect(() => {
        (async() => await loadData())();
    }, []);

    const loadData = async () => {
        await fetch.execute("GET", {eventId: evt.eventId!, table: "service"});
    }

    const handleDelete = async(id:string, title:string) => {
        const confirm = window.confirm("Delete service? " + title);
        if (confirm){
            if(id) await fetch.execute("DELETE", {eventId: evt.eventId!, table: "service", tableId: id});
            await loadData();
        }      
    }

    if(fetch.loading) return (<>Loading</>);

    return (
        <RepositoryTemplate addPath='new'><ServiceRepository repository={fetch.response} onDelete={handleDelete} /></RepositoryTemplate>
    );
}

export default Service;