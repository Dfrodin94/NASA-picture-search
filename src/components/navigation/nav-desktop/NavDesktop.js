import React, {useContext} from "react";
import {useHistory} from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import {DatesContext} from "../../../shared/provider /DatesProvider";
import "./NavDesktop.css";

export const NavDesktop = () => {
    const history = useHistory();
    const [savedDates, setSavedDates] = useContext(DatesContext);

    return (

        <nav>


            <span onClick={() => history.push(RoutingPath.homeView)}> Home </span>
            <span onClick = {() => history.push(RoutingPath.otherView)}> Other </span>
        </nav>
    )

}