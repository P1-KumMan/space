import React from "react";
import Home from "module";
import Rockets from "./Rockets";
import Rocket from "./Rocket";
import Dragon from "./Dragon";
import Dragons from "./Dragons";
import Starlink from "./Startlink";
import Sat from "./Sat";

import { Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link as RouterLink } from "react-router-dom";

export const Header = () => {
  const classes = useStyles();
  return (
    <div className="space">
      <nav className={classes.menu}>
        <Link component={RouterLink} to="/">
          <Button color="primary">Home</Button>
        </Link>
        <Link component={RouterLink} to="/Rockets">
          <Button color="primary">Rockets</Button>
        </Link>
        <Link component={RouterLink} to="/Starlink">
          <Button color="primary">Starlink</Button>
        </Link>
        <Link component={RouterLink} to="/Dragons">
          <Button color="primary">Dragon</Button>
        </Link>
      </nav>
      <main className={classes.main}>
        <Switch>
          <Route exact path="/Rockets">
            <Rockets />
          </Route>
          <Route exact path="/Rockets/:rocketId">
            <Rocket />
          </Route>
          <Route exact path="/Dragons">
            <Dragons />
          </Route>
          <Route exact path="/Dragons/:dragonId">
            <Dragon />
          </Route>
          <Route exact path="/Starlink">
            <Starlink />
          </Route>
          <Route exact path="/Starlink/:satId">
            <Sat />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    padding: "16px",
  },
  menu: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#CCC",
    "& button": {
      margin: theme.spacing(1),
    },
  },
}));
