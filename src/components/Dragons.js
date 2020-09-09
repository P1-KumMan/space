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

const Dragons = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { status, data } = useQuery("rocks", () =>
        fetch("https://api.spacexdata.com/v4/dragons")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    console.info(data);
    return (
        <div>
            <h2>Dragons</h2>
            {data.data.map((dragon) => {
                console.log(dragon);
                return (
                    <Grid item xs={6}>
                        <Card key={dragon.id} to={`/rocket/${dragon.id}`}>
                            {dragon.flickr_images.map((img) => {
                                console.log(img);
                                return <div>{img}</div>;
                            })}
                            <CardContent className={classes.card}>
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
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </div>
    );
};

export default Dragons;
