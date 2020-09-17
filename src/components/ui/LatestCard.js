import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "react-query";
import fetch from "../fetch";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "#212121",
        marginBottom: ".5rem",
        // flexDirection: "row",
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
const LatestCard = ({ history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const { status, data } = useQuery("news", () =>
        fetch("https://api.spacexdata.com/v4/launches/latest")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
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
            </div>
            <CardMedia
                className={classes.media}
                image="https://www.spacex.com/static/images/falcon-9/F9_3.webp"
                title="Orbital Rocket Booster"
            />
        </Card>
    );
};

export default LatestCard;
