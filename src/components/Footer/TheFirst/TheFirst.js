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
            background:'black',
            height:'15vh',
            display:'flex',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'space-evenly',
        }}>
            
        <BoxTheFirst 
        i={<ContactPhoneOutlinedIcon fontSize="large" sx={{color:colors.primary[300]}}/>} 
        type='Our Email: ahmed@hamada.com '/>
        <BoxTheFirst   
        i={<EmailOutlinedIcon fontSize="large" sx={{color:colors.primary[300]}}/>} 
        type='tel: +79821313578'/>
        <BoxTheFirst 
        i={<WaterDropOutlinedIcon fontSize="large" sx={{color:colors.primary[300]}}/>} 
        type='Our Address: Link to google map'/>
        </Box>
        </>
    )
}