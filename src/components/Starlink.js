import React from "react";
import { useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import fetch from "./fetch";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import "fontsource-oswald";
import "fontsource-antic-slab";
import "fontsource-abel";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        display: "flex",
    },
    title: {
        fontSize: 14,
    },
    media: {
        height: 300,
        width: "100%",
        objectFit: "contain",
    },
    head: {
        textAlign: "center",
        margin: "1.5rem",
        fontFamily: "oswald, Arial, Verdana, sans-serif",
        fontWeight: "550",
    },
}));
const Starlink = () => {
    const classes = useStyles();
    const { status, data } = useQuery("satalites", () =>
        fetch("https://api.spacexdata.com/v4/starlink")
    );
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;
    const l = data.data.length;
    return (
        <div>
            <Typography variant="h2" className={classes.head}>
                STARLINK
            </Typography>
            <Grid className={classes.root}>
                <Grid item xs={12}>
                    <img
                        key="l"
                        style={{
                            width: "100%",
                            height: 400,
                            objectFit: "contain",
                        }}
                        src="https://live.staticflickr.com/65535/47926144123_2a828b66d5_o.jpg"
                        alt="sat"
                    />
                    <Typography variant="body1">
                        Starlink is a satellite internet constellation being
                        constructed by SpaceX providing satellite Internet
                        access The constellation will consist of thousands of
                        mass-produced small satellites in low Earth orbit (LEO),
                        working in combination with ground transceivers. SpaceX
                        also plans to sell some of the satellites for military,
                        scientific, or exploratory purposes. The SpaceX
                        satellite development facility in Redmond, Washington
                        houses the Starlink research, development,
                        manufacturing, and on-orbit control operations. The
                        total cost of the decade-long project to design, build,
                        and deploy the constellation was estimated by SpaceX in
                        May 2018 to be about US$10 billion. Product development
                        began in 2015, with the first two prototype test-flight
                        satellites launched in February 2018. A second set of
                        test satellites and the first large deployment of a
                        piece of the constellation occurred in May 2019 when the
                        first 60 operational satellites were launched. As of
                        September 2020, SpaceX is launching up to 60 satellites
                        at a time, aiming to deploy 1,440 of the 260 kilograms
                        (570 lb) spacecraft to provide near-global service by
                        late 2021 or 2022. SpaceX was initially targeting a
                        private beta service in the Northern United States and
                        Canada by August 2020 with a public beta following in
                        November 2020, service beginning at high latitudes
                        between 44°-52° North.There are {l} Satalites now
                        online.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Starlink;
