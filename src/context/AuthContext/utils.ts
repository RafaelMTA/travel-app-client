const baseURL = "http://localhost:4000/api/";

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
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getTokenLocalStorage()}`
        });

        const response = await fetch(baseURL + "signin", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            body: JSON.stringify({email, password})
        });

        if(response.ok) return response.json();
     
        // const response = await signin(email, password);
        // return response.data;
        
        // await auth.login(email, password);
    }catch(error){
        return null;
    }
}

export const RegisterRequest = async(email: string, password: string, confirmPassword: string) => {
    try{
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

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