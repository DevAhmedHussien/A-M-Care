import mainPhoto from '../../images/blue-ribbon-stethoscope.png';
import { Button } from '@mui/material';
import noneed from '../../images/Screenshot_1.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WeightM from './weightManagement/WeightM';
import MedWork from'./medWorkStepper/MedWork'
import Questions from './questions/Questions';
import ToggleButtons from './ToggleButtons'
import Comment from './comment/Comment';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Provider from './providerDoctor/Provider';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function Main(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
return (
<Box sx={{}}>
    <Box component ='div' 
    sx={{height:'100vh',
        position:'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        gap:1,
        textAlign:'center',
        padding: '163px'
        }}>
            <Box 
            sx={{ 
                backgroundImage: `url(${mainPhoto})`,
                position:'absolute', 
                backgroundRepeat: 'no-repeat', 
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                opacity:'0.8'
                }}> 
            </Box>
            <Box  
                sx={{display:'flex' , justifyContent:'center', alignItems:'center',gap:1}}>
                <img
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius:15
                }} src={noneed} alt='No - Needed'/>
                <Typography variant='h1' color={colors.primary[200]} 
                sx={{
                    fontSize:'23px'
                }}>No Insurance <span style={{color:'#3399ff'}}>Needed</span> </Typography>
            </Box>
        <Typography variant='h3' sx={{mt:5}} color={colors.primary[200]} > Healthcare for 
            <del style={{textDecoration:'line-through'}}>  Jane</del>, <del style={{textDecoration:'line-through'}}> Jone</del>,   
            <del style={{color:'#3399ff'}}>Everyone</del> .
        </Typography>
        <Typography variant='h4'  color={colors.primary[200]} >
                Upfront pricing with no hidden fees.</Typography>
            <ToggleButtons/>
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
        {/* </Box> */}
    </Box>
    <WeightM/>
    <MedWork/>
    {/* <Comment/> */}
    <Provider/>
    <Questions/>
\
</Box>
)
}