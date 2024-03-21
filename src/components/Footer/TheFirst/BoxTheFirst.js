import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function BoxTheFirst({i,type}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box 
        sx={{
            // height:'10vh',
            // width:'20%',
            display:'flex',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'center',
            gap:1,
        }}>
            {i}
            <Typography variant="h5" textAlign='center' color='white'> 
                {type}
            </Typography>
        </Box>
        </>
    )
}