import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
export default function BoxTheFirst(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box 
        sx={{
            // p:5,
            width:'20%',
            height:'10vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:1
        }}>
            <AccessibilityNewOutlinedIcon  fontSize="large" sx={{color:colors.primary[300]}}/>
            <Typography variant="h3" textAlign='center' color='white'> 
                xxxxxxxxxxxx
            </Typography>
        </Box>
        </>
    )
}