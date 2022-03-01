import axios from 'axios';
import { getTokenLocalStorage } from 'context/AuthContext/utils';

export const api = axios.create({
    baseURL: 'http://localhost:4000/api'
});

api.interceptors.request.use(
    config => {
        const token = getTokenLocalStorage();
        config.headers!.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const repositoryGetAll = async(eventId?:string, table?:string, query?:string) => {
    let url =  '/event';
    eventId && (url += `/${eventId}`);
    table && (url += `/${table}`);
    query && (url += `?${query}`);
    return await api.get(url);
}

export const repositoryCreate = async(data:object, eventId?:string, table?:string) => {
    let url =  '/event';
    eventId && (url += `/${eventId}`);
    table && (url += `/${table}`);
    return await api.post(url, {...data});
}

export const repositoryRead = async(eventId:string, table?:string, tableId?:string) => {
    let url =  `/event/${eventId}`;
    table && (url += `/${table}`);
    tableId && (url += `/${tableId}`);
    return await api.get(url);
}

export const repositoryUpdate = async(data:object, eventId:string, table?:string, tableId?:string) => {
    let url =  `/event/${eventId}`;
    table && (url += `/${table}`);
    tableId && (url += `/${tableId}`);
    return await api.put(url, {...data});
}

export const repositoryDelete = async(eventId:string, table?:string, tableId?:string) => {
    let url =  `/event/${eventId}`;
    table && (url += `/${table}`);
    tableId && (url += `/${tableId}`);
    return await api.delete(url);
}

export const signin = async(email:string, password:string) => {
    let url = '/signin';
    return await api.post(url, {email, password});
}