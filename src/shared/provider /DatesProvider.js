import {useState, createContext} from "react";

export const DatesContext = createContext(null);

export const DatesProvider = ({children}) => {
    const [savedDates, setSavedDates] = useState([]);
    return (
        <DatesContext.Provider value={[savedDates, setSavedDates]}>
            {children}
        </DatesContext.Provider>

    );
}