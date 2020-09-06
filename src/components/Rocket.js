import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Rocket = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <Typography variant="h4">{id}</Typography>
            <Typography variant="h4">{id}</Typography>
            <Typography variant="h4">{id}</Typography>
            <Typography variant="h4">{id}</Typography>
        </div>
    );
};

export default Rocket;
