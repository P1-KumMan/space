import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#BB86FC",
        },
        secondary: {
            main: "#03DAC6",
        },
    },
});

export default theme;
