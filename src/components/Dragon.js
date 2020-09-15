import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import fetch from "./fetch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Dragon = () => {
    let { id } = useParams();
    console.log(id);
    const { status, data } = useQuery("news", () =>
        fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    return (
        <div>
            <Typography variant="h2">{data.data.name}</Typography>
        </div>
    );
};
export default Dragon;
