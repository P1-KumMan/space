import React from "react";
import { Link as Rlink } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Starlink from "./Starlink";
import Sat from "./Sat";
import Rockets from "./Rockets";
import Rocket from "./Rocket";
import Dragon from "./Dragon";
import Dragons from "./Dragons";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, Button } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#CCC",
    fontFamily: "sans-serif",
    "& button": {
      margin: theme.spacing(2),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="sticky">
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.menuButton}>
              <Link color="secondary" component={Rlink} to="/">
                <Button color="">Home</Button>
              </Link>
            </Typography>
            <Typography className={classes.menuButton}>
              <Link color="secondary" component={Rlink} to="/dragons">
                <Button color="">Dragon</Button>
              </Link>
            </Typography>
            <Typography className={classes.menuButton}>
              <Link color="secondary" component={Rlink} to="/rockets">
                <Button color="">Rockets</Button>
              </Link>
            </Typography>
            <Typography className={classes.menuButton}>
              <Link color="secondary" component={Rlink} to="/starlink">
                <Button color="">Starlink</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/starlink" component={Starlink} />
          <Route path="/sat/:id" component={Sat} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/rocket/:id" component={Rocket} />
          <Route path="/dragons" component={Dragons} />
          <Route path="/dragon/:id" component={Dragon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Header;
