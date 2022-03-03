export const setTokenLocalStorage = (token:string|null) => {
    localStorage.setItem("t", JSON.stringify(token));
}

export const getTokenLocalStorage = () => {
    const json = localStorage.getItem("t");

    if(!json) return null;

    const token = JSON.parse(json);

    return token ?? null;
}

export const setUserLocalStorage = (token:string|null) => {
    localStorage.setItem("u", JSON.stringify(token));
}

export const getUserLocalStorage = () => {
    const json = localStorage.getItem("u");

    if(!json) return null;

    const user = JSON.parse(json);

    return user ?? null;
}

const baseURL = "http://localhost:4000/api/";

const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getTokenLocalStorage()}`
});

export const LoginRequest = async(email: string, password: string) => {
    try{
        const response = await fetch(baseURL + "signin", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify({email, password})
        });

        if(response.ok) return response.json();
    }catch(error){
        return null;
    }
}

export const RegisterRequest = async(email: string, password: string, confirmPassword: string) => {
    try{
        const response = await fetch(baseURL + "signup", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify({email, password, confirmPassword})
        });      

        if(response.ok) {
            alert("User successfully created")
        }
    }catch(error){
        return null;
    }
}

export const ProfileRequest = async() => {
    try{
        const response = await fetch(baseURL + "users", {
            method: "GET",
            mode: 'cors',
            cache: 'no-cache',
            headers: headers
        });      
    
        if(response.ok) return response.json();
    }catch(error){
        return null;
    }  
}

export const UpdateProfile = async(email: string, imageURL:string) => {
    try{
        const response = await fetch(baseURL + "users", {
            method: "PUT",
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify({email, imageURL})
        });      
    
        if(response.ok) return response.json();
    }catch(error){
        return null;
    }  
}