import {useState, createContext} from "react";

export const DatesContext = createContext(null);

export const DatesContext = ({children}) => {
    const [savedDates, setSavedDates] = useState(null);
    return (
        <DatesContext.Provider value={[savedDates, setSavedDates]}>
            {children}
        </DatesContext.Provider>

    );
}