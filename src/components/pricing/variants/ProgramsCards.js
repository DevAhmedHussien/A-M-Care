import * as React from 'react';
import Card from '@mui/material/Card';
import {Button,Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import Slider from './silder/Slider';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


export default function ProgramsCards({card}) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card  sx={{ 
    width: '250px' , p:5,
    // height:750,
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
      <Box sx={{height:100}}>
        <Typography variant='h3' sx={{textAlign:'center'}} color={colors.primary[200]}>
        {card.title}
        </Typography>
      </Box>
        <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
      <Box sx={{height:100}}>
        <Typography variant='h4' sx={{ textAlign:'center'}} 
        color={colors.primary[200]}>
        <span style={{fontSize:50}}>{card.price}</span> monthly
        </Typography>
      </Box>  
        <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>

      <Box sx={{height:150}}>
        <img src='' alt='' 
        style={{width:'100%',height:'80px'}} />
        <Typography variant='h6' 
        sx={ {textAlign:'center'}} 
        color={colors.primary[200]} >
          {card.descriptionOfDays}
        </Typography >
        <Typography variant='h3' 
        sx={{fontWeight:600,textAlign:'center'}}
        color={colors.primary[200]}>
        GLP-1
        </Typography >
    </Box>
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    <Box sx={{height:100}}>
    <Typography variant='h5'  color={colors.primary[200]} 
      sx={{
        textAlign:'center',
        transition:"all .3s ease" ,
        }}>
      Same ingredient as  
    </Typography>
    {/* <br/>  */}
    <Typography 
      sx={{
        textAlign:'center',
        transition:"all .3s ease" ,
        '&:hover':{
          cursor:"pointer",
          fontWeight:700,
        }
        }}>
          {card.ingredient}
    </Typography>
    </Box>
    <hr style={{width:'100%',color:colors.primary[300], background:colors.primary[300]}}/>
    <Box
    sx={{display:'flex',flexDirection:'column' ,alignItems:'center',gap:0}}>
    <Button variant="contained"  
            endIcon={
            <ChevronRightOutlinedIcon id='icon1' 
            sx={{position:'absolute',top:'9px',color:colors.primary[150],transition:'170ms',}}/>} 
                sx={{ my: 2, 
                    position :"relative", 
                    background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,mt:'25px',
                    boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                    display: 'flex',textTransform: 'capitalize',width:150,
                    transition:'1700ms',
                    color:'white',
                    fontWeight:600,
                        '&:hover ': {
                          backgroundColor: '#9ea3dc',

                        // mb:1,
                    },
                        '&:hover #icon1': {
                            marginLeft:'5px'
                    },'&:active': {
                        boxShadow: 'none',
                        backgroundColor: '#9ea3dc',

                    }}}
                    type="submit" value="Send">Get Started
    </Button>
    <Slider card={card}/>
    </Box>
    </Card>
  );
}