import React from "react";
import { useQuery } from "react-query";
import fetch from "./fetch";
import { Grid, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "fontsource-oswald";
import "fontsource-antic-slab";
import "fontsource-abel";

const useStyles = makeStyles((theme) => ({
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
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "oswald, Arial, Verdana, sans-serif",
        fontWeight: "550",
        margin: "1.5rem",
    },
    card: {
        padding: theme.spacing(2),
    },
    single2: {
        backgroundColor: "#212121",
        color: "white",

        fontFamily: "antic-slab, Arial, Verdana, sans-serif",
        fontWeight: "200",
    },
    single: {
        backgroundColor: "black",
        color: "white",
        fontFamily: "abel, Arial, Verdana, sans-serif",
        fontWeight: "500",
    },
}));

const Rockets = ({ history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const { status, data } = useQuery("rockets", () =>
        fetch("https://api.spacexdata.com/v4/rockets")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>; // console.info(data);
    return (
        <Grid container className={classes.root} direction="row">
            <Grid item xs={12}>
                <Typography className={classes.head} variant="h2">
                    ROCKETS
                </Typography>
            </Grid>
            {data.data.map((rok) => {
                return (
                    <Grid
                        item
                        xs={matches === true ? 6 : 12}
                        className={classes.card}
                        key={rok.id}
                    >
                        <Card
                            key={rok.id}
                            to={`/rocket/${rok.id}`}
                            className={classes.single2}
                        >
                            <CardContent>
                                <Carousel>
                                    {rok.flickr_images.map((img, i) => (
                                        <CardMedia
                                            key={i}
                                            style={{
                                                width: "100%",
                                                height: 400,
                                                objectFit: "cover",
                                            }}
                                            image={img}
                                            alt={rok.name}
                                        />
                                    ))}
                                </Carousel>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    color="inherit"
                                    className={classes.single2}
                                >
                                    {rok.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="inherit"
                                    component="p"
                                    className={classes.single2}
                                >
                                    {rok.description}
                                </Typography>
                                <TableContainer
                                    component={Paper}
                                    color="inherit"
                                    className={classes.single}
                                >
                                    <Table
                                        backgroundColor="inherit"
                                        className={classes.single}
                                    >
                                        <TableBody color="inherit">
                                            <TableRow
                                                className={classes.single}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        color="inherit"
                                                        className={
                                                            classes.single
                                                        }
                                                    >
                                                        Height
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography
                                                        variant="body1"
                                                        color="inherit"
                                                        className={
                                                            classes.single
                                                        }
                                                    >
                                                        {rok.height.meters} m
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow
                                                className={classes.tablecell}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        color="inherit"
                                                        className={
                                                            classes.single
                                                        }
                                                    >
                                                        Mass
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography
                                                        variant="body1"
                                                        color="inherit"
                                                        className={
                                                            classes.single
                                                        }
                                                    >
                                                        {rok.mass.kg} kg
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow
                                                className={classes.single}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {rok.active === true ? (
                                                        <Typography
                                                            variant="body1"
                                                            color="inherit"
                                                            className={
                                                                classes.single
                                                            }
                                                        >
                                                            Active
                                                        </Typography>
                                                    ) : (
                                                        <Typography
                                                            variant="body1"
                                                            color="inherit"
                                                            className={
                                                                classes.single
                                                            }
                                                        >
                                                            Not Active
                                                        </Typography>
                                                    )}
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {rok.first_stage
                                                        .reusable === true ? (
                                                        <Typography
                                                            variant="body1"
                                                            color="inherit"
                                                            className={
                                                                classes.single
                                                            }
                                                        >
                                                            Reusable
                                                        </Typography>
                                                    ) : (
                                                        <Typography
                                                            variant="body1"
                                                            color="inherit"
                                                            className={
                                                                classes.single
                                                            }
                                                        >
                                                            Not Reusable
                                                        </Typography>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Rockets;
