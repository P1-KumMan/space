import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Link } from "react-router-dom";
import { Grid, Container, CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Car from "./ui/Car";

const useStyles = makeStyles((theme) => ({
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
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(2),
    },
    single: { backgroundColor: "#212121", color: "white" },
}));

const Dragons = ({ history }) => {
    const classes = useStyles();
    const theme = useTheme();

    const { status, data } = useQuery("dragons", () =>
        fetch("https://api.spacexdata.com/v4/dragons")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    console.log(data.name);
    if (status === "success")
        return (
            <Grid container className={classes.root} direction="row">
                <Grid item xs={12}>
                    <Typography className={classes.head} variant="h1">
                        Dragons
                    </Typography>
                </Grid>
                {data.data.map((dragon) => {
                    console.log(dragon);
                    return (
                        <Grid item xs={6} className={classes.card}>
                            <Card
                                key={dragon.id}
                                to={`/rocket/${dragon.id}`}
                                className={classes.single}
                            >
                                <CardContent>
                                    <Carousel>
                                        {dragon.flickr_images.map((img, i) => (
                                            <CardMedia
                                                style={{
                                                    width: "100%",
                                                    height: 300,
                                                    objectFit: "cover",
                                                }}
                                                image={img}
                                                alt={dragon.name}
                                                onClick={() => {
                                                    history.push(
                                                        `/dragon/${dragon.id}`
                                                    );
                                                }}
                                            />
                                        ))}
                                    </Carousel>
                                    <CardActionArea
                                        onClick={() => {
                                            history.push(
                                                `/dragon/${dragon.id}`
                                            );
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            component="h4"
                                            color="inherit"
                                        >
                                            {dragon.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="inherit"
                                            component="p"
                                        >
                                            {dragon.description}
                                        </Typography>
                                    </CardActionArea>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        );
};

export default Dragons;
