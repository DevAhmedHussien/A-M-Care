import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
export default function Alert({show,setShow}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    function closing(){
        setShow(false)
    }
    return(
        <Box 
        sx={{
            mt:8,
            color:'white',
            // background:colors.primary[300],
             height:'60px',display: show ? 'flex' : 'none',
            alignItems:'center', justifyContent:'space-evenly',
            background:'linear-gradient(silver, #9198e5)',
            transition:'170ms',
            border:'1px solid #e5eaf299',
            borderRadius:'20px',
            '&:hover':{ 
                boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                border:'1px solid #3399ff'
            }
            }}>
        <Box
        sx={{
            p:3, 

            color:'white',
            display: 'flex' ,
            alignItems:'center', justifyContent:'center',gap:2,
            }}>
            <Typography variant="h5">whe have offer bb 50% </Typography>
            <Button  color='secondary' sx={{textDecoration:'under-line'}}
            onClick={closing}>click here</Button>
        </Box>
        <IconButton aria-label="delete" size="small">
            <CloseOutlinedIcon sx={{fontSize:20,color:colors.primary[200]}} />
        </IconButton>
        </Box>
    )
}