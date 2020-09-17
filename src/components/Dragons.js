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
        fontFamily: "D-DIN-Bold, Arial, Verdana, sans-serif",
    },
    card: {
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(2),
    },
    single2: { backgroundColor: "#212121", color: "white" },
    single: {
        backgroundColor: "black",
        color: "white",
        marginTop: ".5rem",
    },
}));

const Dragons = ({ history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const { status, data } = useQuery("dragons", () =>
        fetch("https://api.spacexdata.com/v4/dragons")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    if (status === "success")
        return (
            <Grid container className={classes.root} direction="row">
                <Grid item xs={12}>
                    <Typography className={classes.head} variant="h1">
                        DRAGONS
                    </Typography>
                </Grid>
                {data.data.map((dragon) => {
                    return (
                        <Grid
                            item
                            xs={matches === true ? 6 : 12}
                            className={classes.card}
                        >
                            <Card
                                key={dragon.id}
                                to={`/rocket/${dragon.id}`}
                                className={classes.single2}
                            >
                                <CardContent>
                                    <Carousel>
                                        {dragon.flickr_images.map((img, i) => (
                                            <CardMedia
                                                style={{
                                                    width: "100%",
                                                    height: 300,
                                                    objectFit: "cover",
                                                }}
                                                image={img}
                                                alt={dragon.name}
                                            />
                                        ))}
                                    </Carousel>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        color="inherit"
                                    >
                                        {dragon.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="inherit"
                                        component="p"
                                    >
                                        {dragon.description}
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
                                                            Dry Mass
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
                                                            {dragon.dry_mass_kg}{" "}
                                                            kg
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow
                                                    className={
                                                        classes.tablecell
                                                    }
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
                                                            Crew Capacity
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
                                                            {
                                                                dragon.crew_capacity
                                                            }
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
                                                        {dragon.active ===
                                                        true ? (
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
                                                        <Typography
                                                            variant="body1"
                                                            color="inherit"
                                                            className={
                                                                classes.single
                                                            }
                                                        ></Typography>
                                                        <Typography
                                                            variant="body1"
                                                            color="inherit"
                                                            className={
                                                                classes.single
                                                            }
                                                        ></Typography>
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

export default Dragons;
