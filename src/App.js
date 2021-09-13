import React from 'react'
import {Routes} from "./routes/Routes";
import {Navigation} from "./components/navigation/Navigation";
import {SavedPostsProvider} from "./shared/provider /SavedPostsProvider";
import "./App.css";

export function App() {
    return (
        <>
            <SavedPostsProvider>
                <Routes>
                    <Navigation/>
                </Routes>
            </SavedPostsProvider>
        </>
    );
}

