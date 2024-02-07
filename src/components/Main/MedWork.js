    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Stepper from '@mui/material/Stepper';
    import Step from '@mui/material/Step';
    import StepLabel from '@mui/material/StepLabel';
    import StepContent from '@mui/material/StepContent';
    import Button from '@mui/material/Button';
    import Paper from '@mui/material/Paper';
    import Typography from '@mui/material/Typography';
    import mainPhoto from '../../images/doctor-nurses-special-equipment.jpg'
    const steps = [
    {
        label: 'Step 1 - Medical History ',
        description: `Complete a simple medical history form so your provider can develop the best 
        treatment plan for you. It’s fast, easy, and free.`,
        image:mainPhoto
        
    },
    {
        label: 'Step 2 - Online Visit',
        description:
        `Speak to a physician or nurse practitioner licensed to treat 
        your condition with a simple online conversation.`,
        image:mainPhoto
    },
    {
        label: 'Step 3 - Receive Meds',
        description: `Receive your medication in the mail, all programs come with free shipping directly to your door.
        Follow up with your provider any time you need assistance.`,
        image:mainPhoto
    },
    ];

    export default function MedWork() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box variant='div' sx={{height:'90vh'}}>
            <Typography variant='h3' sx={{textAlign:'center',fontWeight:'700'}}>How Henry Meds Works</Typography>
            <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500'}}>A&M Makes it easy to get started with no insurance required</Typography>
                <Box sx={{ width: '100vw' ,p:10,
                display:'flex',justifyContent:'center',alignItems:'center'
                }}>
                    <Stepper activeStep={activeStep} orientation="vertical" sx={{width:'80vw'}}>
                    {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                        optional={
                            index === 2 ? (
                            <Typography variant="caption">Last step</Typography>
                            ) : null
                        }
                        >
                        <h2>{step.label}</h2>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{display: 'flex',alignItems:'center',gap:'30px'}}>
                                <Typography variant='h4'>{step.description}</Typography>
                                <img src={step.image} alt='' style={{width:'200px',height:'200px'}}/>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                </Button>
                                <Button
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                    </Paper>
                )}
            </Box>
            </Box>
    );
    }