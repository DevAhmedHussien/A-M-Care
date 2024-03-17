
import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import imgMainProduct from '../../../images/7514780.png'
import ToggleButtons from '../../Main/ToggleButtons';
export default function MainPricing(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box variant='div' sx={{mt:'20px',display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap',
        // gap:25,
        height:'80vh'}}>
            <Box variant='div' sx={{display:'flex',flexDirection:'column',alignItem:'start'}}>
                <Typography variant='h2' color={colors.primary[200]}>Easy Weight 
                <span style={{color:colors.primary[300]}}> Management</span></Typography>
                <br/>
                <Typography variant='h4' color={colors.primary[200]}>Choose the best method that works for you!</Typography>
                <Typography variant='h6' color={colors.primary[200]}
                sx={{
                    mt:1
                }}>
                    Includes Provider & Medication Access 
                <br/>
                No Hidden Fees – No Insurance Needed</Typography>
                <ToggleButtons/>
            </Box>
            <Box variant='div' 
            sx={{width:150,
                height:300,
                boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                borderRadius:5
                }}>
                <img src={imgMainProduct} alt='' 
                style={{width:150,
                height:300,
                animationName: 'rotate',
                animationDuration: '3.6s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
            }} />
            </Box>
        </Box>
        
        </>
    )
}