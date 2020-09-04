import React from "react";
import { useParams } from "react-router-dom";

const Dragon = () => {
    let { id } = useParams();
    return (
        <div>
            <br></br>
            <br></br>
            {id}
        </div>
    );
};

export default Dragon;
