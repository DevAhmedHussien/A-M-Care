
import { Box ,Button} from '@mui/material';
import MainPricing from './Main/MainPricing';
import WPrograms from './variants/WPrograms';
import OurPriority from './Priority/OurPriority'
import SolutionFinally from './solution/SolutionsFinally'
import MedWork from '../Main/medWorkStepper/MedWork';
import Questions from '../Main/questions/Questions';
import CardS from './solution/CardS';
import { tokens } from '../../Context/ThemeContext';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useTheme } from '@mui/material';
import providersFaces from './ProviderPricing/providersFaces';
export default function Princing(){  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box>
            <MainPricing/>
            <WPrograms/>
            <OurPriority/>
            <SolutionFinally/>
            <MedWork/>
            <CardS 
            // dir='rtl'
            ques='How GLP-1s Work ? '
            typ1='GLP-1 (glucagon-like peptide 1) weight loss treatments are named after the hormone receptor they stimulate. When injected or taken orally, GLP-1s increase insulin production and reduce your feeling of hunger.  '
            typ2='When combined with diet and exercise, GLP-1 weight loss treatments can help you succeed on your weight loss journey. '
            typ3='There are different types of GLP-1 treatments so it is best to discuss your options with a provider to find the right one for you.'
            typ4='Lets read moree about that ... '
            />
            <CardS 
            // dir='ltr'
            ques='How Stimulants Work ? '
            typ1='Weight loss stimulants work by increasing neurotransmitter levels in the brain, leading to a suppressed appetite. Stimulants may also be combined with anticonvulsants which also help reduce appetite.  '
            typ2='When taken daily, orally, and combined with diet and exercise, stimulant weight loss treatments can help you succeed on your weight loss journey. '
            typ3='There are different types of stimulant treatments so it is best to discuss your options with a provider to find the right one for you.'
            typ4='Lets read moree about that ... '
            />
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained"  
                    endIcon={
                        <ChevronRightOutlinedIcon id='icon1' 
                        sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                } 
                    sx={{
                        m:'10px auto',
                        width:'250px',
                        color:colors.primary[300],
                        textTransform:'capitalizees',
                            '&:hover ': {
                                // backgroundColor:'white !important' ,
                                // mb:1,
                            },
                                '&:hover #icon1': {
                            marginLeft:'5px'
                                
                            },'&:active': {
                                boxShadow: 'none',
                                backgroundColor: 'black',
                            }
                    }}
                            type="submit" value="Send"> Get start
            </Button>
            </Box>
            <providersFaces/>
            <Questions/>
            
        </Box>
        </>
    )
}