import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ffb5a7',
            light: '#fcd5ce'
        },
        secondary: {
            main: '#fec89a',
            light: 'f9dcc4'
        },
        background: {
            default: '#f8edeb'
        }
    },
})

export default theme

// --melon: #ffb5a7ff;
// --pale-pink: #fcd5ceff;
// --seashell: #f8edebff;
// --peach-puff: #f9dcc4ff;
// --peach-crayola: #fec89aff;