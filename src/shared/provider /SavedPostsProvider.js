import {useState, createContext} from "react";

export const SavedPostsContext = createContext(null);

export const SavedPostsProvider = ({children}) => {
    const [savedPosts, setSavedPosts] = useState([]);
    return (
        <SavedPostsContext.Provider value={[savedPosts, setSavedPosts]}>
            {children}
        </SavedPostsContext.Provider>

    );
}