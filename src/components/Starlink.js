import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Typography } from "@material-ui/core";

const Starlink = () => {
    const { status, data } = useQuery("satalites", () =>
        fetch("https://api.spacexdata.com/v4/starlink")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    console.log(data);
    return (
        <div>
            <Typography variant="h2">Sat</Typography>
            {data.data.map((sat) => {
                return (
                    <Link key={sat.id} to={`/sat/${sat.id}`}>
                        {sat.id} statalite
                    </Link>
                );
            })}
            <Link to="/">go Home </Link>
        </div>
    );
};

export default Starlink;
