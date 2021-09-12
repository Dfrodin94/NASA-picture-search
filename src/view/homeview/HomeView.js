import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {DatesContext} from "../../shared/provider /DatesProvider";
import {Button} from "@material-ui/core";
import "./HomeView.css";

export function HomeView() {

    const [savedPosts, setSavedPosts] = useContext(DatesContext);
    const [date, setDate] = useState("");
    const [item, setItem] = useState({});
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {

        // TODO env variable on API-key
        const api = "Iq9MemSuUlX8W6T4TKpGPp2hzFEIHOcPdmc03OuJ";
        const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`;

        axios.get(url)
            //TODO loading bar while fetching
            .then(function (response) {
                setItem(response.data);
            })
            .catch(function (error) {
                console.log(error, "failed to fetch data");
            });
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
                date: item.date,
                title: item.title,
                picture: item.url,
                copyright: item.copyright
            };

        setSavedPosts(prevPosts => {
            return [...prevPosts, currentPost]
        });
        event.preventDefault();
    }

    return (
        <>
            <main className="home__wrapper">
                <form>
{/*
                    //TODO min-datum och max-datum
*/}
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
                    <h1>{item.title}</h1>
                    <hr className="item__line"/>
                    <img className="picture" src={item.url} alt=""/>
                    <p className="item__paragraph-main">{item.explanation}</p>
                    <p>Copyright: {item.copyright}</p>
                    <p>{item.date}</p>
                    {/*// TODO om bild inte finns förmodligen switch på media_type*/}
                </div>
            </main>
        </>
    );

}





