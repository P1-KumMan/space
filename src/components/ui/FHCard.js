import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "react-query";
import fetch from "../fetch";
import { withRouter } from "react-router-dom";
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
        height: 400,
        objectFit: "contain",
    },
    cont: {
        color: "white",
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
            <CardActionArea
                className={classes.details}
                onClick={() => {
                    history.push(`/rocket/${data.data.id}`);
                }}
            >
                <CardContent className={classes.cont}>
                    <Typography variant="h4" component="h4" color="inherit">
                        {data.data.name}
                    </Typography>
                    <Typography variant="body2" color="inherit" component="p">
                        {data.data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardMedia
                className={classes.media}
                image="https://www.spacex.com/static/images/falcon-heavy/FH_1.webp"
                title="Falcon Heavy"
            />
        </Card>
    );
});

export default FHCard;
