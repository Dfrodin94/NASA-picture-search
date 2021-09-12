import React, {useContext} from "react";
import {DatesContext} from "../../shared/provider /DatesProvider";
import {Post} from "../../components/post/Post";
import "./SavedPostsView.css";

export function SavedPostsView() {

    const [savedDates, setSavedDates] = useContext(DatesContext);

    const mockData = [{
        date: "2021-09-11",
        picture: "https://apod.nasa.gov/apod/image/2109/LastRingPortrait_Cassini_1080.jpg",
        title: "Saturn at Night",
        copyright: "David Frödin"
    },
        {
            date: "2021-09-11",
            picture: "https://apod.nasa.gov/apod/image/2109/LastRingPortrait_Cassini_1080.jpg",
            title: "Saturn at Night",
            copyright: "David Frödin"

        },
        {
            date: "2021-09-11",
            picture: "https://apod.nasa.gov/apod/image/2109/LastRingPortrait_Cassini_1080.jpg",
            title: "Saturn at Night",
            copyright: "David Frödin"

        }
    ];

    return (
        <main className="posts__wrapper">

            {/* //TODO fixa knapparna och logiken bakom dem*/}
            <button>Editors choice</button>
            <button>My List</button>

            <div className={"saved-items__wrapper"}>
                {mockData.map((dateItem, index) => {
                    return (
                        <Post
                            title={dateItem.title}
                            img={dateItem.picture}
                            copyright={dateItem.copyright}
                        />
                    )
                })}
            </div>
        </main>
    );
}