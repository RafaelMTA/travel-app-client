export const setEventLocalStorage = (event:string|null) => {
    localStorage.setItem("e", JSON.stringify(event));
}

export const getEventLocalStorage = () => {
    const json = localStorage.getItem("e");

    if(!json) return null;

    const event = JSON.parse(json);

    return event ?? null;
}