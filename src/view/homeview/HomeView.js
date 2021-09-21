import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {SavedPostsContext} from "../../shared/provider /SavedPostsProvider";
import {Button, LinearProgress} from "@material-ui/core";
import "./HomeView.css";

export function HomeView() {

    const [savedPosts, setSavedPosts] = useContext(SavedPostsContext);
    const [date, setDate] = useState("");
    const [serverResponse, setServerResponse] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getDataFunction() {
        // TODO env variable on API-key
        const api = "Iq9MemSuUlX8W6T4TKpGPp2hzFEIHOcPdmc03OuJ";
        const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`;

        try {
            const data = await axios
                .get(url)
                //TODO loading bar while fetching
                .then(function (response) {
                    setServerResponse(response.data);
                });
            //Hade kunnat struna i try catch och bara andvänt axios catch, om jag förstått det rätt`
            setLoading(true);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDataFunction();
    }, [trigger])

    function handleChange(event) {
        setDate(event.target.value);
    }

    function submitDate(event) {
        setTrigger(prevValue => {
                return !prevValue
            }
        );
        event.preventDefault();
    }

    function savePost(event) {
        const currentPost =
            {
                date: serverResponse.date,
                title: serverResponse.title,
                picture: serverResponse.url,
                copyright: serverResponse.copyright
            };

        setSavedPosts(prevPosts => {
            return [...prevPosts, currentPost]
        });
        console.log(savedPosts);
        event.preventDefault();
    }

    return (
        <>
            <main className="home__wrapper">
                <form>
                    {/*//TODO min-datum och max-datum*/}
                    <input type={"date"} onChange={handleChange} value={date}/>
                </form>
                <div className="button__container">
                    <Button
                        variant="contained" color="primary" size="small"
                        onClick={submitDate}>

                        Submit
                    </Button>

                    <Button
                        variant="contained" color="primary" size="small"
                        onClick={savePost}>

                        Save
                    </Button>
                </div>

                <div className="item__wrapper">
                    {loading ? (null) : (<LinearProgress/>)}
                    <h1>{serverResponse.title}</h1>
                    <hr className="item__line"/>
                    <a href={serverResponse.url} target="_blank">
                        <img className="picture" src={serverResponse.url} alt=""/>
                    </a>
                    <p className="item__paragraph-main">{serverResponse.explanation}</p>
                    <p>Copyright: {serverResponse.copyright}</p>
                    <p>{serverResponse.date}</p>
                    {/*// TODO om bild inte finns förmodligen switch på media_type*/}
                </div>
            </main>
        </>
    );

}





