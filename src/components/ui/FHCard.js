import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "black",
        marginBottom: ".5rem",
    },
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
});
const FHCard = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.details}>
                <CardContent className={classes.cont}>
                    <Typography variant="h4" component="h4" color="inherit">
                        Falcon Heavy
                    </Typography>
                    <Typography variant="body2" color="inherit" component="p">
                        With the ability to lift into orbit over 54 metric tons
                        (119,000 lb)--a mass equivalent to a 737 jetliner loaded
                        with passengers, crew, luggage and fuel--Falcon Heavy
                        can lift more than twice the payload of the next closest
                        operational vehicle, the Delta IV Heavy, at one-third
                        the cost.
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image="https://www.spacex.com/static/images/falcon-heavy/FH_1.webp"
                    title="Falcon Heavy"
                />
            </CardActionArea>
        </Card>
    );
};

export default FHCard;
