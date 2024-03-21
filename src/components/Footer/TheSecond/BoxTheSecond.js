import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
export default function BoxTheSecond({title , typ1 , typ2 ,typ3,typ4 }){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box 
        sx={{
            
            width:'20%',
            display:'flex',
            flexDirection:'column',
            gap:1
        }}>
            {/* <AccessibilityNewOutlinedIcon  fontSize="large" sx={{color:colors.primary[300]}}/>
             */}
            <Typography variant="h4" 
            sx={{
                fontWeight:700,
                lineHeight:1
            }}> 
                {title}
            </Typography>
            <Typography variant="h5"  
            sx={{
            mt:2,
            cursor:'pointer',
            transition:'170ms',
            '&:hover':{ 
                fontWeight:700,
                boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                borderBottom:'1px solid #3399ff'
            }
            }}> 
                {typ1}
            </Typography>
            <Typography variant="h5" 
            sx={{
                cursor:'pointer',
                transition:'170ms',
                '&:hover':{ 
                    fontWeight:700,
                    boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    borderBottom:'1px solid #3399ff'
                }
            }}> 
                {typ2}
            </Typography>
            <Typography variant="h5"  
            sx={{
                cursor:'pointer',
                transition:'170ms',
                '&:hover':{ 
                    fontWeight:700,
                    boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    borderBottom:'1px solid #3399ff'
                }
                }}> 
                {typ3}
            </Typography>
            <Typography variant="h5" 
            sx={{
                cursor:'pointer',
                transition:'170ms',
                '&:hover':{ 
                    fontWeight:700,
                    boxShadow:'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    borderBottom:'1px solid #3399ff'
                }
                }}
            > 
                {typ4}
            </Typography>
        </Box>
        </>
    )
}