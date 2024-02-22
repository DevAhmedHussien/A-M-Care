import Box from '@mui/material/Box';
import {Typography,Button} from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens} from '../../../Context/ThemeContext'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
export default function NoProductsInCart(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box   sx={{p:3,
        display:'flex',  flexDirection: "column",
        gap:2,
        borderRadius:'10px' ,// background:colors.primary[100],
        transition:'170ms',
        background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',      
        border:'1px solid #e5eaf299',
        '&:hover':{ 
            // boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
            // border:'1px solid #3399ff'
        }}}>
            <Box  sx={{p:2,display:'flex',justifyContent:'center',alignItem:'center',gap:2}}>
                <Typography  color={colors.primary[200]} variant="h6" align='left' >
                No Items in Cart  
                </Typography>
                <ShoppingCartOutlinedIcon sx={{color:colors.primary[300]}}/>
            </Box>
            <Typography  color={colors.primary[200]} variant="h3" align='left' >
            The weight is over
            </Typography>
            <Typography  color={colors.primary[200]} variant="h5" align='left'>
            <span style={{color:colors.primary[300]}}>Let’s face it – </span> sometimes reaching your weight loss goals is difficult on your own and you just need a little help. Our team of MinuteMD providers and skilled staff is here to help you reach those goals with one of our weight loss treatment plans. We offer a variety of weight loss products to help you on your journey including tirzepatide, semaglutide and liraglutide.
            </Typography>
            <Link to='/Product'>
            <Button variant=""  
                    endIcon={<LocalMallOutlinedIcon id='icon1' 
                    sx={{position:'absolute',
                    top:'8px',
                    color:colors.primary[150],
                    transition:'170ms',}}/>} 
                        sx={{ my: 2, 
                            position :"relative", 
                            background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,
                            mt:'25px',
                            boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            textTransform: 'capitalize',width:180,
                            transition:'1700ms',
                            color:'white',
                            fontWeight:600,
                                '&:hover ': {
                                backgroundColor:'white !important' ,
                                // mb:1,
                            },
                                '&:hover #icon1': {
                                    top:'2px'
                            },'&:active': {
                                boxShadow: 'none',
                                backgroundColor: 'black',
                            }}}
                            type="submit" value="Send"> Our Products
            </Button>
            </Link>
        </Box>
    )
}