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
const F9Card = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.details}>
                <CardMedia
                    className={classes.media}
                    image="https://www.spacex.com/static/images/falcon-9/F9_7.webp"
                    title="Falcon 9"
                />
                <CardContent className={classes.cont}>
                    <Typography variant="h4" component="h4" color="inherit">
                        Falcon 9
                    </Typography>
                    <Typography variant="body2" color="inherit" component="p">
                        Falcon 9 is a two-stage rocket designed and manufactured
                        by SpaceX for the reliable and safe transport of
                        satellites and the Dragon spacecraft into orbit.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default F9Card;
