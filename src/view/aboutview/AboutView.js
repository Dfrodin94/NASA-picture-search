import React from "react";
import "./AboutView.css";

export function AboutView() {

    return (
        <main className="about__wrapper">

            <div className="about__text__wrapper">
                <h1 className="about__h1">About</h1>

                <div className="about__paragraph_wrapper">
                    <hr className="about__hr"/>
                    <p className>This page was made using React.js. Data is fetched from the NASA astronomic picture of
                        the day API. </p>
                    <br/>

                    <p>Coming updates: </p>
                    <ul className="about__ul">
                        <li>
                            <p>Creating a server in node.js</p>
                        </li>
                        <li>
                            <p>Database for saved pictures</p>
                        </li>
                        <li>
                            <p>Authentication and sign in functionality </p>
                        </li>
                    </ul>

                    <br/>
                    <p>To view source code, see
                        <a href="https://github.com/Dfrodin94/NASA-picture-serach" target="_blank">
                            Github.</a>
                    </p>

                    <hr className="about__hr"/>
                    <p>To read more about the developer, please see his <a href="https://davidfrodin.com" target="_blank">
                             homepage. </a>
                    </p>
                </div>
            </div>
        </main>
    )
}