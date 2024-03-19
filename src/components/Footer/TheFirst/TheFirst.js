import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import BoxTheFirst from "./BoxTheFirst";
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
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
            
        <BoxTheFirst 
        i={<ContactPhoneOutlinedIcon fontSize="large" sx={{color:colors.primary[300]}}/>} 
        type='ay 7onkish'/>
        <BoxTheFirst   
        i={<EmailOutlinedIcon fontSize="large" sx={{color:colors.primary[300]}}/>} 
        type='ay 7onkish'/>
        <BoxTheFirst 
        i={<WaterDropOutlinedIcon fontSize="large" sx={{color:colors.primary[300]}}/>} 
        type='ay 7onkish'/>
        </Box>
        </>
    )
}