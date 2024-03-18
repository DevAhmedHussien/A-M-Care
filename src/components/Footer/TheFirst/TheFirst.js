import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import BoxTheFirst from "./BoxTheFirst";
export default function TheFirst(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box 
        sx={{
            height:'15vh',
            display:'flex',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'space-between',
            background:'black',
        }}>
            
        <BoxTheFirst/>
        <BoxTheFirst/>
        <BoxTheFirst/>
        </Box>
        </>
    )
}