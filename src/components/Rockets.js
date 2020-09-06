import React from "react";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Rockets = () => {
    const { status, data } = useQuery("rocks", () =>
        fetch("https://api.spacexdata.com/v4/rockets")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    // console.info(data);
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <h2>Rockets</h2>
                </Grid>
                <Grid item xs={12}>
                    {data.data.map((rok) => {
                        let a;
                        if (rok && rok.fliker_images) {
                            a = rok.fliker_images;
                        }
                        console.log(a);
                        return (
                            <Card key={rok.id} to={`/rocket/${rok.id}`}>
                                <CardContent>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        color="inherit"
                                    >
                                        {rok.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="inherit"
                                        component="p"
                                    >
                                        {rok.description}
                                    </Typography>
                                </CardContent>
                                <CardMedia src={a}></CardMedia>
                            </Card>
                        );
                    })}
                </Grid>
            </Grid>
        </div>
    );
};

export default Rockets;
