import React from "react"
import "./Page404.css";
import {useLocation} from "react-router-dom";

export function Page404() {
    let location = useLocation();

    return (
        <>
            <div className="page404__wrapper">
                <h1 className="page404__h1">
                    Seems that you've gone into an unknown galaxy.
                </h1>
                <h1 className="page404__h1">There is nothing at <code>{location.pathname}</code></h1>
            </div>
        </>
    );

}