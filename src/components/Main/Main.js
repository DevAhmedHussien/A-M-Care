import mainPhoto from '../../images/doctor-nurses-special-equipment.jpg'
import { Button } from '@mui/material';
import noneed from '../../images/Screenshot_1.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WeightM from './WeightM';
import MedWork from'./MedWork'
import Questions from './Question';
export default function Main(){
    return (
        <>
            <Box component ='div' 
            sx={{height:'90vh',
                // backgroundImage: `url(${mainPhoto})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '153px'}}>
                <Box  sx={{display:'flex' , justifyContent:'center', alignItems:'center',gap:1
            }}>
                    <img
                    style={{
                        width: '30px',
                        height: '30px',
                        borderRadius:15
                    }}
                    src={noneed} alt='No - Needed'></img>
                    <Typography variant='h1'
                    sx={{
                        fontSize:'23px'
                    }}>No Insurance <span style={{color:'#3399ff'}}>Needed</span> </Typography>
                </Box>
                <Box variant='div' sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
                    <Typography variant='h2' sx={{}}> Healthcare for <del style={{color:'',textDecoration:'line-through'}}>John</del>,
                        <del style={{color:'#3399ff',textDecoration:'line-through'}}>Jane</del>, Everyone .</Typography>
                    <Typography variant='h3' style={{}}>
                        Upfront pricing with no hidden fees.</Typography>
                        <Button   sx={{ my: 2, color: 'black', display: 'block',textTransform: 'capitalize',width:150,
                                    fontWeight:600,
                                    '&:hover': {
                                    backgroundColor:'#e5eaf299',
                                    mb:1,
                                },'&:active': {
                                    boxShadow: 'none',
                                    backgroundColor: 'black',
                                } }} variant="contained" >Get Started</Button>
                </Box>
            </Box>
            <WeightM/>
            <MedWork/>
            <Questions/>
        </>
    )
}