import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "react-query";
import fetch from "../fetch";
import { Link, withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "#212121",
        marginBottom: ".5rem",
    },
    details: {
        display: "flex",
    },
    media: {
        width: "100%",
        height: "400px",
        objectFit: "contain",
    },
    cont: {
        color: "white",
    },
});
const F9Card = withRouter(({ history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const { status, data } = useQuery("f9", () =>
        fetch("https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    // console.info(data);
    return (
        <Card
            className={classes.root}
            style={
                matches === true
                    ? { flexDirection: "row" }
                    : { flexDirection: "column" }
            }
        >
            <CardMedia
                className={classes.media}
                image="https://www.spacex.com/static/images/falcon-9/F9_7.webp"
                title="Falcon 9"
            />
            <CardActionArea className={classes.details}>
                <CardContent className={classes.cont}>
                    <Typography variant="h4" component="h4" color="inherit">
                        {data.data.name}
                    </Typography>
                    <Typography variant="body2" color="inherit" component="p">
                        {data.data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

export default F9Card;
