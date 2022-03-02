import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

interface URL {
    eventId?:string;
    table?:string;
    tableId?:string;    
}

const useFetch = () => {
    const auth = useAuth();

    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(false);

    const baseURL = 'http://localhost:4000/api';

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
    });

    const fetchData = async(method:string, optionalURL?:URL, body?:object) => {
        let url = baseURL + "/event";
        optionalURL?.eventId && (url += `/${optionalURL?.eventId}`);
        optionalURL?.table && (url += `/${optionalURL?.table}`);
        optionalURL?.tableId && (url += `/${optionalURL?.tableId}`);

        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify(body)
        });

        if(response.status === 405) auth.logout();

        return response.json();
    };

    const execute = async(method:string, optionalURL?:URL, body?:object) => {
        try{
            setLoading(true);
            const response = await fetchData(method, optionalURL, body);     
            setResponse(response);          
            setLoading(false);
            setLoadingError(false);     
        }catch(error){            
            setLoadingError(true);
        }
    }

    return { response, execute, loading, loadingError };
}

export default useFetch;