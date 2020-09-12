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

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "#212121",
        marginBottom: ".5rem",
        flexDirection: "row",
    },
    details: {
        display: "flex",
        flexDirection: "row",
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
const LatestCard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { status, data } = useQuery("news", () =>
        fetch("https://api.spacexdata.com/v4/launches/latest")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    console.info(data);
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.details}>
                <CardContent className={classes.cont}>
                    <Typography variant="h6" component="h6" color="inherit">
                        Latest Launch
                    </Typography>
                    <Typography variant="h4" component="h4" color="inherit">
                        {data.data.name}
                    </Typography>
                    <Typography
                        variant="h4"
                        component="h4"
                        color="inherit"
                    ></Typography>
                    <Typography variant="body2" color="inherit" component="p">
                        {data.data.details}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image="https://www.spacex.com/static/images/falcon-9/F9_3.webp"
                    title="Orbital Rocket Booster"
                />
            </CardActionArea>
        </Card>
    );
};

export default LatestCard;
