import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button,Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function ProgramsCards() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card  sx={{ 
    width: '15%' , p:4,
    display:'flex',flexDirection:'column',justifyContent:'center',
    alignItems:'center',
    gap:2,
    borderRadius:'10px',
    transition:'170ms',

    background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
    border:'1px solid #e5eaf299',
    '&:hover':{ 
        // boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
        boxShadow:colors.primary[1100],
      
        border:'1px solid #3399ff'
    } }}
    >
    <Typography variant='h3' sx={{textAlign:'center'}} color={colors.primary[200]}>
    Compounded
    Semaglutide
    </Typography>
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    <Typography variant='h4' sx={{ textAlign:'center'}} color={colors.primary[200]}>
    <span style={{fontSize:50}}>$297</span> monthly
    </Typography>
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    
    <Typography variant='h3' sx={{fontWeight:600}} color={colors.primary[200]}>
    GLP-1
    </Typography >
    
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    
    <Typography variant='h6' sx={ {textAlign:'center'}} color={colors.primary[200]} >
    <img src='' alt='' />
    Weekly Injections
    </Typography >
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    
    <Typography variant='h5' sx={{textAlign:'center'}} color={colors.primary[200]}>
    Same ingredient as
    {/* <Button href='' alt='' >Ozempic®* and Wegovy®*</Button> */}
    </Typography>
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    
    {/* <Box> */}
    {/* <Button variant="outlined">Outlined</Button> */}
    <Button variant="contained">Get started</Button>
    <Button variant="contained">Learn More</Button>

    {/* </Box> */}
    </Card>
  );
}