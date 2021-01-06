import React from "react";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export const HeroCards = ({ props }) => {
    return (
        <div>
            <Card>
                <CardMedia image="https://www.spacex.com/static/images/falcon-9/F9_3.webp" />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <CardContent>
                        <Typography variant="h3" component="h3" color="inherit">
                            test
                        </Typography>
                        <Typography variant="h5" color="inherit" component="h5">
                            bbckskacvacc bcuwuccsc webkwbc
                        </Typography>
                    </CardContent>
                </Grid>
            </Card>
        </div>
    );
};
