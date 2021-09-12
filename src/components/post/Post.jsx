import React from "react"
import "./Post.css";

export function Post(props) {
    return (
        <section className="post__wrapper">
            <h2>{props.title} </h2>
            <hr className="item__line"/>
            <div className="image__wrapper">
                <img className="picture" src={props.img} alt=""/>
            </div>
            <p>©: {props.copyright}</p>
        </section>
    );

}