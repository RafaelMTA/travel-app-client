import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

const useFetch = (method:string) => {
    const auth = useAuth();

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(false);

    const baseURL = 'http://localhost:4000/api/event';

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
    });

    const fetchData = async(eventId?:string, table?:string, tableId?:string, query?:string, body?:object) => {
        let url = baseURL;
        eventId && (url += `/${eventId}`);
        table && (url += `/${table}`);
        tableId && (url += `/${tableId}`);
        query && (url += `?${query}`);

        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify(body)
        });
        return response.json();
    };

    const execute = async(eventId?:string, table?:string, tableId?:string, query?:string, body?:object) => {
        try{
            setLoading(true);
            const response = await fetchData(eventId, table, tableId, query, body);    
            setData(response.data);
            setLoading(false);
            setLoadingError(false);
        }catch(error){
            setLoadingError(true);
        }
    }

    useEffect(() => {
        console.log("Fetch Context");
        if(method !== 'GET') return;
        (async() => await execute())();
    }, []);

    return { data, execute, loading, loadingError };
}

export default useFetch;