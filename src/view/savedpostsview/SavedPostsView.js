import React, {useContext, useState} from "react";
import {SavedPostsContext} from "../../shared/provider /SavedPostsProvider";
import {Post} from "../../components/post/Post";
import {Button} from "@material-ui/core";
import {editorsChoiceData} from "./EditorsChoiceData";
import "./SavedPostsView.css";

export function SavedPostsView() {

    const [postShower, setPostShower] = useState(false);
    const [savedPosts, setSavedPosts] = useContext(SavedPostsContext);

    function showSavedPosts() {
        return (
            <>
                <h1 className="saved-posts-h1">{savedPosts.length === 0 ? "Ooobs! No saved posts, please save a post." : null} </h1>
                {
                    savedPosts.map((dateItem, index) => {
                        return (
                            <Post
                                title={dateItem.title}
                                img={dateItem.picture}
                                copyright={dateItem.copyright}
                            />
                        )
                    })
                }
            </>
        )
    }

    function showEditorsChoice() {
        return (
            <>
                {
                    editorsChoiceData.map((dateItem, index) => {
                        return (
                            <Post
                                title={dateItem.title}
                                img={dateItem.picture}
                                copyright={dateItem.copyright}
                            />
                        )
                    })
                }
            </>
        )
    }

    return (
        <main className="posts__wrapper">
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
                {postShower ? showEditorsChoice() : showSavedPosts()}
            </div>
        </main>
    );
}