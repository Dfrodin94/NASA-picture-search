import React from 'react'
import {Routes} from "./routes/Routes";
import {Navigation} from "./components/navigation/Navigation";
import {DatesProvider} from "./shared/provider /DatesProvider";
import "./App.css";

export function App() {
    return (
        <>
            <DatesProvider>
                <Routes>
                    <Navigation/>
                </Routes>
            </DatesProvider>
        </>
    );
}

