import * as React from 'react';
import { useContext } from 'react';
import {Typography,Button,Box,CardContent,CardMedia,CardActions,Card} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import InnerCardWeightMan from '../../Main/weightManagement/InnerCardWeightMan';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import  GlobalContext  from "../../../Context/GlobalContext"
import Rating from '@mui/material/Rating';
export default function Items({item}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const context = useContext(GlobalContext)
    const { basket ,setBasket} = context
    const addToBasket = () => {
        setBasket([...basket, item]) 
    }
    console.log('basket',basket)
return(
    <Card sx={{ 

        width:'300px',
        height:550,
        // maxWidth: 345 ,
        borderRadius:'10px',
        transition:'170ms',

        background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
        border:'1px solid #e5eaf299',
        '&:hover':{ 
            // boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
            boxShadow:colors.primary[1100],
          
            border:'1px solid #3399ff'
        } }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={item.images}
            />
            <CardContent sx={{height:'200px'}} >
                <Box  
                    sx={{display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    WebkitAlignItems:'center !important'}} >
                <Box
                sx={{
                    position:'relative'
                    }}  >
                <Rating name="read-only" value={item.rating}  readOnly sx={{ zIndex:1}} />
                <Rating name="read-only" value={5} 
                sx={{
                    
                color:'silver',
                position:'absolute',
                top:0,
                right:0,
                }}  readOnly />
                </Box>
                <Typography gutterBottom variant="h5" component="div" color={colors.primary[200]}>
                {item.name}</Typography>
                <Typography gutterBottom variant="h5" component="div" color={colors.primary[200]}>
                {item.price}<span style={{color:colors.primary[300]}}>$</span>
                </Typography>
                <InnerCardWeightMan description={item.description}/>
                {/* <InnerCardWeightMan description={item.description[1]}/>
                <InnerCardWeightMan description={item.description[2]}/>
                <InnerCardWeightMan description={item.description[3]}/> */}
                <CardActions>
                </CardActions>
                <Button variant=""  
                    endIcon={<LocalMallOutlinedIcon id='icon1' 
                    sx={{position:'absolute',top:'8px',color:colors.primary[150],transition:'170ms',}}/>} 
                        sx={{ my: 2, 
                            position :"relative", 
                            bottom:0,
                            background: `linear-gradient(to right bottom, #007fff, #3399ff 140%)`,
                            // mt:'25px',
                            boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            textTransform: 'capitalize',width:140,
                            transition:'1700ms',
                            color:'white',
                            fontWeight:600,
                                '&:hover ': {
                                backgroundColor:'white !important' ,
                                // mb:1,
                            },
                                '&:hover #icon1': {
                                    top:'2px'
                            },'&:active': {
                                boxShadow: 'none',
                                backgroundColor: 'black',
                            }}}
                            type="submit" value="Send"
                            onClick={addToBasket}   >To cart
                    </Button>
                </Box>
            </CardContent>
    </Card>
    )
}
