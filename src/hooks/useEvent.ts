// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useEvent = () => {
//     const navigate = useNavigate();
//     const [event, setEvent] = useState<string>();

//     const set = (event:string) => {
//         setEvent(event);
//         navigate('/dashboard');
//     }

//     const remove = () => {
//         setEvent('');
//         navigate('/');
//     }

//     return { event, set, remove };   
// }

// export default useEvent;

import { EventContext } from "context/EventContext";
import { useContext } from "react";

export const useEvent = () => {
    const context = useContext(EventContext);

    return context;
}