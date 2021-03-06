import React, {useContext} from "react";
import {useHistory} from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import {SavedPostsContext} from "../../../shared/provider /SavedPostsProvider";
import "./NavDesktop.css";

export const NavDesktop = () => {
    const history = useHistory();
    const [savedDates, setSavedDates] = useContext(SavedPostsContext);

    return (
        <>
            <nav className="navbar--desktop">

                <span className="navbar__logo--desktop"> 👽 </span>

                <ul className="navbar__list--desktop">
                    <li>
                        <button className="navbar__button"
                                onClick={() => history.push(RoutingPath.aboutView)}>
                            About
                        </button>
                    </li>
                    <li>

                        <button className="navbar__button"
                            onClick={() => history.push(RoutingPath.homeView)}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className="navbar__button"
                            onClick={() => history.push(RoutingPath.otherView)}>
                            Saved posts
                        </button>
                    </li>

                </ul>
                <span className={"navbar__login--desktop"}>Sign in</span>

            </nav>

            <div className="navbar__line"></div>
        </>
    )

}