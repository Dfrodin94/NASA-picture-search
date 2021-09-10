import React, {useContext} from "react";
import {useHistory} from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import "./NavDesktop.css";

export const NavDesktop = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(DatesContext);

    setAuthenticatedUser("hej");

    return (

        <nav>
            <span>{authenticatedUser}</span>
            <span onClick={() => history.push(RoutingPath.homeView)}> Home </span>
            <span onClick = {() => history.push(RoutingPath.otherView)}> Other </span>
        </nav>
    )

}