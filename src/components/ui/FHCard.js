import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "react-query";
import fetch from "../fetch";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "fontsource-oswald";
import "fontsource-antic-slab";
import "fontsource-abel";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "#212121",
        marginBottom: ".5rem",
    },
    media: {
        width: "100%",
        height: 400,
        objectFit: "contain",
    },
    cont: {
        color: "white",
    },
    head: {
        fontFamily: "oswald, Arial, Verdana, sans-serif",
    },
    datades: {
        fontFamily: "abels, Arial, Verdana, sans-serif",
    },
});
const FHCard = withRouter(({ history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const { status, data } = useQuery("data", () =>
        fetch("https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed")
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
                    : { flexDirection: "column-reverse" }
            }
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CardContent className={classes.cont}>
                    <Typography
                        variant="h4"
                        component="h4"
                        color="inherit"
                        className={classes.head}
                    >
                        {data.data.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="inherit"
                        component="p"
                        className={classes.datades}
                    >
                        {data.data.description}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.media}
                image="https://www.spacex.com/static/images/falcon-heavy/FH_1.webp"
                title="Falcon Heavy"
            />
        </Card>
    );
});

export default FHCard;
