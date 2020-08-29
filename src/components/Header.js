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
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "i",
    },
    title: {
        flexGrow: 1,
    },
    app: {
        margin: 0,
        color: "white",
        backgroundColor: "black",
    },
}));
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <HideOnScroll>
                    <AppBar className={classes.app}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.menuButton}>
                                <Link color="inherit" component={Rlink} to="/">
                                    <Button color="inherit">Home</Button>
                                </Link>
                            </Typography>
                            <Typography className={classes.menuButton}>
                                <Link
                                    color="inherit"
                                    component={Rlink}
                                    to="/dragons"
                                >
                                    <Button color="inherit">Dragon</Button>
                                </Link>
                            </Typography>
                            <Typography className={classes.menuButton}>
                                <Link
                                    color="inherit"
                                    component={Rlink}
                                    to="/rockets"
                                >
                                    <Button color="inherit">Rockets</Button>
                                </Link>
                            </Typography>
                            <Typography className={classes.menuButton}>
                                <Link
                                    color="inherit"
                                    component={Rlink}
                                    to="/starlink"
                                >
                                    <Button color="inherit">Starlink</Button>
                                </Link>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
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
