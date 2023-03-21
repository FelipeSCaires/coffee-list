import { createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary:{
             main: orange[700],
             dark: orange[800],
             light: orange[500],
             contrastText: '#ffffff',
        },
        secondary:{
             main: grey[700],
             dark: grey[800],
             light: grey[500],
             contrastText: '#ffffff',
        },
        background: {
            default: '#e1e1e6',
            paper: '#ffffff',
        }
    }
})