import React from "react";
import { useParams } from "react-router-dom";
import {
    Typography,
    makeStyles,
    Grid,
    useTheme,
    Card,
} from "@material-ui/core";
import { useQuery } from "react-query";
import fetch from "./fetch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 350,
        backgroundColor: "black",
        color: "white",
    },
    tablecell: {
        backgroundColor: "black",
        color: "white",
    },
    tablecell2: {
        backgroundColor: "black",
        color: "white",
    },
    hh: {
        textAlign: "center",
    },
}));

const Rocket = () => {
    let { id } = useParams();
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const { status, data } = useQuery("news", () =>
        fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    // let rrrr = data && data.data ? data.data.height : undefined;
    return (
        <div>
            <Typography variant="h2" className={classes.hh}>
                {data.data.name}
            </Typography>
            <Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6} className={classes.stable}>
                    <TableContainer component={Card} color="inherit">
                        <Table
                            className={classes.table}
                            backgroundColor="inherit"
                        >
                            <TableBody color="inherit">
                                <TableRow className={classes.tablecell}>
                                    <TableCell component="th" scope="row">
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            Height
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            {data.data.height.meters}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tablecell}>
                                    <TableCell component="th" scope="row">
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            Mass
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            {data.data.mass.kg}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Card} color="inherit">
                        <Table
                            className={classes.table}
                            backgroundColor="inherit"
                        >
                            <TableBody color="inherit">
                                <TableRow className={classes.tablecell}>
                                    <TableCell component="th" scope="row">
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            1
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            2
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tablecell}>
                                    <TableCell component="th" scope="row">
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            1
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            2
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tablecell}>
                                    <TableCell component="th" scope="row">
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            1
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            2
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.tablecell}>
                                    <TableCell component="th" scope="row">
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            1
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                            className={classes.tablecell}
                                        >
                                            2
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default Rocket;
