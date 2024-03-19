
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
import ProvidersFaces from './ProviderPricing/providersFaces';
import CardSLeft from './solution/CardSLeft';
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
            <CardSLeft 
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
            {/* <Comment/> */}
            <ProvidersFaces/>
            <CardS 
            // dir='ltr'
            ques='The A&M Guarantee ? '
            typ1='100% Satisfaction Or Your Money Back'
            typ2='For the first 30 days, you get complete access to Henry programs and our providers to fully test how effective our weight loss treatments are.   '
            typ3='If you are not 100% satisfied, or you do not see adequate results within 30 days, simply request your money back and you will be refunded in full. '
            typ4='No questions asked.'
            />
            <CardSLeft 
            // dir='ltr'
            ques='What are Compounded Medications? '
            typ1='Compounded medications are a patient-specific medication created in a state Board of Pharmacy or FDA licensed compounding facility per a prescription from a licensed healthcare professional. Compounded drugs are required to exclusively use ingredients from FDA-licensed facilities, and test sterile compounds for potency, sterility, and purity. '
            typ2='While compounded drugs are legal they do not undergo pre-market approval from the FDA as they are not made in large batches for the public, compounds are made based on specific orders from a medical professional. Because of that the dose, route of administration, and efficacy may differ from commercially available, brand-name, drugs. '
            typ3='A&M Meds exclusively works with licensed sterile compounding pharmacies in the United States.'
            // typ4='No questions asked.'
            />
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button variant="contained"  
                    endIcon={
                        <ChevronRightOutlinedIcon id='icon1' 
                        sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>
                } 
                    sx={{
                        mt:'-73px',
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
            <Questions/>
            
        </Box>
        </>
    )
}