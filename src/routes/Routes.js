import React from "react";
import {BrowserRouter, Switch, Route, useLocation} from "react-router-dom";
import {HomeView} from "../view/homeview/HomeView";
import{OtherView} from "../view/otherview/OtherView";
import RoutingPath from "./RoutingPath";


export const Routes = ({children}) => {
    return (

        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path = {RoutingPath.otherView} component={OtherView}/>
                <Route path={"*"} component={NoMatch}/>
            </Switch>
        </BrowserRouter>

    );

   // TODO gör till egen komponent
    function NoMatch() {
        let location = useLocation();

        return (
            <div>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
        );
}}