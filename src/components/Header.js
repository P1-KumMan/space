import React from "react";
import { Link as Rlink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
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
import { Link, Button, Container } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
    },
    menuButton: {
        marginRight: theme.spacing(0),
        color: "i",
    },
    title: {
        flexGrow: 1,
    },
    app: {
        margin: 0,
        padding: 0,
        color: "white",
        backgroundColor: "black",
    },
    main: {
        padding: ".5rem",
        backgroundColor: "black",
    },

    Button: { font: "D-DIN-Regular", fontWeight: "400" },
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
            <HideOnScroll>
                <AppBar className={classes.app} position="sticky">
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
                                <Button className="te" color="inherit">
                                    Home
                                </Button>
                            </Link>
                        </Typography>
                        <Typography className={classes.menuButton}>
                            <Link
                                color="inherit"
                                component={Rlink}
                                to="/dragons"
                            >
                                <Button color="inherit">
                                    <Typography font="D-DIN-Regular">
                                        Dragon
                                    </Typography>
                                </Button>
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
            <main className={classes.main}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/starlink">
                        <Starlink />
                    </Route>
                    <Route path="/sat/:id">
                        <Sat />
                    </Route>
                    <Route path="/rockets">
                        <Rockets />
                    </Route>
                    <Route path="/rocket/:id" component={Rocket} />
                    <Route path="/dragons" component={Dragons} />
                    <Route path="/dragon/:id" component={Dragon} />
                </Switch>
            </main>
        </div>
    );
};

export default Header;
