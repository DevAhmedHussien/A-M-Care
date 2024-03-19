import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import BoxTheSecond from "./BoxTheSecond";
import Inner from "./Inner";
import ToggleButtons from "../../Main/ToggleButtons";


export default function TheSecond(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Typography variant='h3' sx={{mt:4,textAlign:'center',fontWeight:'700'}}
    >
        <span style={{color:'#3399ff'}}>Join </span>
        our Mailing List</Typography>
        <Typography variant='h5' 
        sx={{textAlign:'center',fontWeight:'500',mt:1}} >
            Stay up to date on our new treatments and offers
        </Typography>
        <Inner/>
        
        <Box 
        sx={{
            p:10,
            display:'flex',
            flexWrap:'wrap',
            alignItems:'start',
            justifyContent:'space-between',
        }}>
            <Box sx={{width:'30%',}}>
            <Typography variant='h1'   color= {colors.primary[200]} sx={{p:'10px'}}>
                A&M
            </Typography>
            <ToggleButtons/>
            </Box>
            <BoxTheSecond/>
            <BoxTheSecond/>
            <BoxTheSecond/>
        </Box>
        
        </>
    )
}