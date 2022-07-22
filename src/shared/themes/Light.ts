import {createTheme} from '@mui/material'
import {blueGrey, grey} from "@mui/material/colors";

export const LightTheme = createTheme({
    palette:{
        primary:{
            main:blueGrey[700],
            dark:blueGrey[800],
            light:blueGrey[500],
            contrastText:'#ffffff',
        },
        secondary:{
            main:grey[500],
            dark:grey[400],
            light:grey[300],
            contrastText:'#ffffff',
        },
        background:{
            default:'#f7f6f3',
            paper:'#ffffff',
        }
    }
})