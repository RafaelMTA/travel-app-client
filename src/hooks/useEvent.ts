import { EventContext } from "context/EventContext";
import { useContext } from "react";

export const useEvent = () => {
    const context = useContext(EventContext);

    return context;
}