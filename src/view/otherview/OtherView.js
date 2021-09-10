import React, {useContext} from "react";
import {DatesContext} from "../../shared/provider /DatesProvider";

export function OtherView() {

    const [savedDates, setSavedDates] = useContext(DatesContext);


    return (
        <>
            <div>
                {savedDates.map((dateItem, index)=> {
                    return (
                        <div>
                            <h1>{dateItem.title}</h1>
                            <h2>{dateItem.date}</h2>
                        </div>

                    );

                })}



            </div>
            <h1>HELLO</h1>
            {/*TODO något med map*/}
        </>
    );
}

