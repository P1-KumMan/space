import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Paper,
    ButtonBase,
    Card,
    CardContent,
    CardHeader,
} from "@material-ui/core";
import LatestCard from "./ui/LatestCard.js";
import F9Card from "./ui/F9Card";
import FHCard from "./ui/FHCard";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "black",
        maxWidth: "sm",
        margin: 10,
    },
}));
export default function Home() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <LatestCard />
            </Grid>
            <Grid item xs={12}>
                <F9Card />
            </Grid>
            <Grid item xs={12}>
                <FHCard />
            </Grid>
        </Grid>
    );
}
