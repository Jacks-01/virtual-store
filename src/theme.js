import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            main: '#415D43',
            light: '#6d8a6e',
            dark: '#19331c',
        },
        secondary: {
            main: '#AB3C24',
            light: '#e26c4e',
            dark: '750600'
        },
        background: {
            default: '#ffffff'
        },
    },
})

export default theme

// --melon: #ffb5a7ff;
// --pale-pink: #fcd5ceff;
// --seashell: #f8edebff;
// --peach-puff: #f9dcc4ff;
// --peach-crayola: #fec89aff;