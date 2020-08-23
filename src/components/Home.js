import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, Paper, ButtonBase, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "0",
        backgroundColor: "black",
    },
    image: {
        // width: 800,
        // height: 500,
    },
    img: {
        margin: "100px",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    font: {
        fontFamily: "sans-serif",
        color: "white",
    },
    ca: {
        backgroundColor: "black",
    },
}));
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction-xs-column>
                    <Grid item xs={6} sm container direction="column">
                        <Card className={classes.ca}>
                            <Grid item xs>
                                <Typography
                                    gutterBottom
                                    className={classes.font}
                                    variant="subtitle1"
                                >
                                    First Orbital Class Rocket capable of
                                    reflight
                                </Typography>
                                <Typography
                                    variant="h2"
                                    gutterBottom
                                    className={classes.font}
                                >
                                    Falcon 9
                                </Typography>
                                <Typography
                                    className={classes.font}
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Two-stage rocket designed and manufactured
                                    by SpaceX for the reliable and safe
                                    transport of satellites and the Dragon
                                    spacecraft into orbit
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                alt="complex"
                                src="https://www.spacex.com/static/images/backgrounds/f9_feature.jpg"
                            />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction-xs-column>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                alt="complex"
                                src="https://www.spacex.com/static/images/dragon/DR_2.jpg"
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm container direction="column">
                        <Grid item xs container direction="column" spacing={3}>
                            <Grid item xs>
                                <Typography
                                    gutterBottom
                                    className={classes.font}
                                    variant="subtitle1"
                                >
                                    Sending humans and cargo into space
                                </Typography>
                                <Typography
                                    variant="h2"
                                    gutterBottom
                                    className={classes.font}
                                >
                                    Dragon
                                </Typography>
                                <Typography
                                    className={classes.font}
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    The Dragon spacecraft is capable of carrying
                                    up to 7 passengers to and from Earth orbit,
                                    and beyond. It is the only spacecraft
                                    currently flying that is capable of
                                    returning significant amounts of cargo to
                                    Earth, and is the first private spacecraft
                                    to take humans to the space station.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction-xs-column>
                    <Grid item xs={6} sm container direction="column">
                        <Grid item xs container direction="row" spacing={3}>
                            <Grid item xs>
                                <Typography
                                    gutterBottom
                                    className={classes.font}
                                    variant="subtitle1"
                                >
                                    Sending humans and cargo into space
                                </Typography>
                                <Typography
                                    variant="h2"
                                    gutterBottom
                                    className={classes.font}
                                >
                                    Dragon
                                </Typography>
                                <Typography
                                    className={classes.font}
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    The Dragon spacecraft is capable of carrying
                                    up to 7 passengers to and from Earth orbit,
                                    and beyond. It is the only spacecraft
                                    currently flying that is capable of
                                    returning significant amounts of cargo to
                                    Earth, and is the first private spacecraft
                                    to take humans to the space station.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                alt="complex"
                                src="https://www.spacex.com/static/images/falcon-heavy/FH_3.jpg"
                            />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
