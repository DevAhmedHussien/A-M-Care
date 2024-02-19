import { Button,Typography,Box} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import provPhoto from '../../../images/pexels-anna-shvets-4167542.jpg'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
export default function Provider(){
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return(
    <>
    <Box variant='div'
    sx={{
        height:'100vh',
        mt:5
    }}>
        <Typography variant='h3' color={colors.primary[200]}
        sx={{textAlign:'center',fontWeight:'700'}}> Talk to a Licensed  <span 
        style={{color:'#3399ff'}}>Provider</span>  </Typography>
        <Typography variant='h5'  sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
        <a style={{color:'#3399ff'}} href='https://'>Our Providers</a> are here to help and care for your needs</Typography>
        <Box variant='div'
            sx={{margin:'70px auto',
            display:'flex',flexWrap:'wrap',
            justifyContent:'space-around',
            alignItems:'center',
            width: '80vw' , height:350, borderRadius:'10px' ,// background:colors.primary[100],
            transition:'170ms',
            background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
            border:'1px solid #e5eaf299',
            '&:hover':{ 
                boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                border:'1px solid #3399ff'
            }}}
            >
            <Box>
                <Typography variant='h5' color={colors.primary[200]} sx={{mb:5}} >Providers Who Care for You</Typography>
                <Typography variant='h6'  color={colors.primary[200]} >At A&M all the providers are committed to giving you the respect <br/>
                and care you deserve. <br/>Each is dedicated to your health and is licensed to treat your condition. </Typography>
                <Button variant="contained"  
                    endIcon={<ChevronRightOutlinedIcon id='icon1' sx={{position:'absolute',top:'10px',color:colors.primary[150],transition:'170ms',}}/>} 
                    sx={{ my: 2, 
                    position :"relative", 
                    background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,mt:'25px',
                    boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    display: 'flex',textTransform: 'capitalize',width:150,
                    transition:'1700ms',
                    color:'white',
                    fontWeight:600,
                        '&:hover ': {
                        backgroundColor:'white !important' ,
                        // mb:1,
                    },
                        '&:hover #icon1': {
                            marginLeft:'5px'
                    },'&:active': {
                        boxShadow: 'none',
                        backgroundColor: 'black',
                    }}}
                    type="submit" value="Send">Get Started
                </Button>
                
            </Box>
            <img src={provPhoto} alt=''
                style={{width:'200px' , height:'300px',borderRadius:10}}/>
        </Box>
    </Box>
</>
)
}