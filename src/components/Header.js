import React from "react";
import { Link as Rlink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Starlink from "./Starlink";
import Rockets from "./Rockets";
import Dragons from "./Dragons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, Button, Container, Grid } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "fontsource-oswald";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        padding: ".2em",
        color: "white",
        backgroundColor: "black",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "i",
        fontFamily: "oswald",
        fontWeight: "300",
    },
    title: {
        flexGrow: 1,
        display: "flex",
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

    // Button: { font: "roboto", fontWeight: "100" },
    linkk: {
        color: "white",
        fontDecarations: "none",
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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <BrowserRouter>
            <Container maxWidth="lg" className={classes.root}>
                <HideOnScroll>
                    <AppBar className={classes.app} position="sticky">
                        {matches === true ? (
                            <Toolbar>
                                <Typography className={classes.menuButton}>
                                    <Link
                                        color="inherit"
                                        component={Rlink}
                                        to="/"
                                    >
                                        <Button className="te" color="inherit">
                                            <img
                                                className="logo"
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/200px-SpaceX-Logo.svg.png"
                                                alt="ac"
                                            />
                                        </Button>
                                    </Link>
                                </Typography>
                                <Typography className={classes.menuButton}>
                                    <Link
                                        color="inherit"
                                        component={Rlink}
                                        to="/dragons"
                                        className={classes.linkk}
                                    >
                                        <Button color="inherit">
                                            <Typography variant="body2">
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
                                        <Button color="inherit">
                                            <Typography
                                                font="D-DIN-Regular"
                                                variant="body2"
                                            >
                                                Rockets
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Typography>
                                <Typography className={classes.menuButton}>
                                    <Link
                                        color="inherit"
                                        component={Rlink}
                                        to="/starlink"
                                    >
                                        <Button color="inherit">
                                            <Typography
                                                font="D-DIN-Regular"
                                                variant="body2"
                                            >
                                                Starlink
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Typography>
                            </Toolbar>
                        ) : (
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    ria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MenuIcon></MenuIcon>
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            backgroundColor: "black",
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            color="inherit"
                                            component={Rlink}
                                            to="/dragons"
                                            className={classes.linkk}
                                        >
                                            Dragons
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            color="inherit"
                                            component={Rlink}
                                            to="/rockets"
                                            className={classes.linkk}
                                        >
                                            Rockets
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            color="inherit"
                                            component={Rlink}
                                            to="/starlink"
                                            className={classes.linkk}
                                        >
                                            Starlink
                                        </Link>
                                    </MenuItem>
                                </Menu>
                                <Typography className={classes.menuButton}>
                                    <Link
                                        color="inherit"
                                        component={Rlink}
                                        to="/"
                                    >
                                        <Button className="te" color="inherit">
                                            <img
                                                className="logo"
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/200px-SpaceX-Logo.svg.png"
                                                alt="ac"
                                            />
                                        </Button>
                                    </Link>
                                </Typography>
                            </Toolbar>
                        )}
                    </AppBar>
                </HideOnScroll>
                <Grid className={classes.main}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/starlink" component={Starlink} />
                        <Route path="/rockets" component={Rockets} />
                        <Route path="/dragons" component={Dragons} />
                    </Switch>
                </Grid>
            </Container>
        </BrowserRouter>
    );
};

export default Header;
