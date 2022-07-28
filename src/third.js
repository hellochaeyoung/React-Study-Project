import React, { useContext } from "react";
import { TextContext } from "./textProvider";

function Third() {

    const textData = useContext(TextContext);

    return (
        <div>
            <p>Third Component</p>
            <b>{textData}</b>
        </div>
    )
}

export default Third;