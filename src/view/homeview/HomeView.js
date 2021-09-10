import React, {useState, useEffect} from "react";
import axios from "axios";
import "./HomeView.css";

// TODO styla appen, gör den responsiv och fin

export function HomeView() {

    const [date, setDate] = useState("");
    const [item, setItem] = useState({});
    const [submit, setSubmit] = useState(false);

    useEffect(() => {

        const api = "Iq9MemSuUlX8W6T4TKpGPp2hzFEIHOcPdmc03OuJ";
        const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api}`;
        // fgfgf

        axios.get(url)
            .then(function (response) {
                setItem(response.data);
            })
            .catch(function (error) {
                console.log(error, "failed to fetch data");
            });
    }, [submit])


    function submitDate(event) {
        setSubmit(prevValue => {
                return !prevValue
            }
        );
        event.preventDefault();
    }

    function handleChange(event) {
        setDate(event.target.value);
    }

    return (
        <>
            <main>
            {/*TODO gör form till en egen komponent */}
            <form>
                {/*//TODO min-datum och max-datum */}
                <input type={"date"} onChange={handleChange} value={date}/>
                <button onClick={submitDate}> Submit</button>
            </form>
                <button> Save date</button>

            {/*//TODO Gör data-visare till egen komponent */}
            <div>
                <h1>{item.copyright}</h1>
                <h1>{item.date}</h1>
                <p>{item.explanation}</p>
                <p>{item.title}</p>
                <img src={item.url} alt=""/>
                {/*// TODO om bild inte finns förmodligen switch på media_type*/}

            </div>


            </main>

        </>
    );
}
