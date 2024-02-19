
import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Paper } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import Avatar from '@mui/material/Avatar';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import x from '../../../images/avatar3.jpg'
import a from '../../../images/avatar3.jpg'
import d from '../../../images/avatar3.jpg'
import p from '../../../images/avatar3.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
{
    label: 'Hussien Fathy',
    imgPath:x,
    body:`"The user interface is incredibly intuitive and easy\n
    to navigate, making for a seamless browsing experience."`
},
{
    label: 'Оксана Алесандровна',
    imgPath:
    d,
    body:`"Использование современных веб-технологий, 
    таких как адаптивный дизайн и функции 
    прогрессивного веб-приложения, обеспечивает современное и
    масштабируемое цифровое присутствие."`
},
{
    label: 'Mickel Jasmson',
    imgPath:
    p,
    body:`"The secure and reliable payment processing system
    instills confidence in making online transactions,
    contributing to a seamless shopping experience"`
},
{
    label: 'Глеб Денис',
    imgPath:
    a,
    body:`"Беспроблемная интеграция с платформами социальных сетей позволяет легко делиться 
    и взаимодействовать с контентом веб-сайта, способствуя формированию ощущения сообщества и связности"`
},
]
function Comment() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const colors = tokens(theme.palette.mode);
  return (
    <Box style={{ display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h3' color={colors.primary[300]}
                    sx={{ textAlign:"center",padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> Review From Clients </Typography>
            <Typography  variant="h2" color={colors.primary[400]}  sx={{textAlign:'center',  padding:'15px 0 50px 0'}}>
                    Testimonials
            </Typography>
        </Box>
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
 
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box component="div"
                sx={{
                  mt:5,
                  height: 305,
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                  display: 'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
                  gap:2,
                }}
                src={step.imgPath}
                alt={step.label}>
                
              <Avatar alt="Remy Sharp" src= {step.imgPath} sx={{width:'50px' ,height:'50px',
                boxShadow:`0px 0px 5px 5px ${colors.primary[400]}`}}/>
            <Typography variant='h6' sx={{color:colors.primary[300],fontSize:'18px' }}>{step.label}</Typography>
            <Typography sx={{color:colors.primary[150],mt:1,p:2,width:'300px'}}>{step.body}<br/></Typography>
            </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper sx={{bgcolor:'transparent'}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Box>
  );
}

export default Comment;