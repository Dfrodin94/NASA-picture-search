import React, {useContext, useState} from "react";
import {SavedPostsContext} from "../../shared/provider /SavedPostsProvider";
import {Post} from "../../components/post/Post";
import {Button} from "@material-ui/core";
import {editorsChoiceData} from "./EditorsChoiceData";
import "./SavedPostsView.css";

export function SavedPostsView() {

    const [postShower, setPostShower] = useState(false);
    const [savedPosts, setSavedPosts] = useContext(SavedPostsContext);

    return (

        <main className="posts__wrapper">

            {/* //TODO fixa knapparna och logiken bakom dem*/}
            <div className="posts-button__wrapper">
                <Button variant="contained" color="primary" size="small"
                        classes={{label: "saved-items-button"}}
                        onClick={() => {
                            setPostShower(true)
                        }}>
                    Editors choice </Button>
                <Button variant="contained" color="primary" size="small"
                        classes={{label: "saved-items-button"}}
                        onClick={() => {
                            setPostShower(false)
                        }}>
                    Saved posts </Button>
            </div>
            <div className={"saved-items__wrapper"}>
                {
                    postShower ?

                        (editorsChoiceData.map((dateItem, index) => {
                            return (
                                <Post
                                    title={dateItem.title}
                                    img={dateItem.picture}
                                    copyright={dateItem.copyright}
                                />
                            )
                        }))
                        :
/*
                        //TODO if savedPosts == null visa något på skärmen
*/

                        (savedPosts.map((dateItem, index) => {
                            return (
                                <Post
                                    title={dateItem.title}
                                    img={dateItem.picture}
                                    copyright={dateItem.copyright}
                                />
                            )
                        }))
                }

            </div>
        </main>
    );
}