import { signin } from "service/api";

export const setTokenLocalStorage = (token:string|null) => {
    localStorage.setItem("t", JSON.stringify(token));
}

export const getTokenLocalStorage = () => {
    const json = localStorage.getItem("t");

    if(!json) return null;

    const token = JSON.parse(json);

    return token ?? null;
}

export const LoginRequest = async(email: string, password: string) => {
    try{
        const response = await signin(email, password);
        return response.data;
    }catch(error){
        return null;
    }
}