import React from "react";
import {BrowserRouter, Switch, Route, useLocation} from "react-router-dom";
import {HomeView} from "../view/homeview/HomeView";
import{SavedPostsView} from "../view/savedpostsview/SavedPostsView";
import {AboutView} from "../view/aboutview/AboutView";
import {Page404} from "../components/page404/Page404";
import RoutingPath from "./RoutingPath";


export const Routes = ({children}) => {
    return (

        <BrowserRouter basename="/NASA-picture-search">
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path={RoutingPath.otherView} component={SavedPostsView}/>
                <Route exact path={RoutingPath.aboutView} component={AboutView}></Route>
                <Route path={"*"} component={Page404}/>
                {/*// hade fått ändra strukturen här om jag exempelvis skapade egna sidor utifrån API-ID eller något*/}
            </Switch>
        </BrowserRouter>

    );
}