import React from "react";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {},
    details: {
        display: "flex",
        flexDirection: "row",
    },
    media: {
        width: "100%",
        height: "500px",
        objectFit: "contain",
    },
    cont: {
        color: "white",
    },
    head: {
        color: "white",
        component: "h3",
    },
    card: {
        backgroundColor: "black",
        color: "white",
    },
});

const Rockets = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { status, data } = useQuery("rocks", () =>
        fetch("https://api.spacexdata.com/v4/rockets")
    );

    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;

    // console.info(data);
    return (
        <Grid container className={classes.root} direction="row">
            <Grid item xs={12}>
                <Typography className={classes.head} variant="h1">
                    Rockets
                </Typography>
            </Grid>
            {data.data.map((rok) => {
                return (
                    <Grid item xs={6}>
                        <Card key={rok.id} to={`/rocket/${rok.id}`}>
                            <CardContent className={classes.card}>
                                {rok.flickr_images.map((img) => {
                                    console.log(img);
                                    return <div>{img}</div>;
                                })}
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
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Rockets;
