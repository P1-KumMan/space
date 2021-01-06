import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#BB86FC",
        },
        secondary: {
            main: "#03DAC6",
        },
        background: {
            paper: "#212121",
        },
    },
});
theme.overrides = {
    MuiCard: {
        root: {
            background: theme.palette.background.paper,
        },
    },
};

export default theme;
