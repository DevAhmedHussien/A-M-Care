
import Grid from '@mui/material/Unstable_Grid2';
import photoCheckOut from '../../../images/checkoutAd.jpg'
import  GlobalContext  from "../../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { tokens} from '../../../Context/ThemeContext'

import {Box,Typography,TextField ,Button} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AutoDeleteOutlinedIcon from '@mui/icons-material/AutoDeleteOutlined';
export default function ProductsInCart(){ 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const context = useContext(GlobalContext)
    const { basket , setBasket, price,handleRemove} = context
    const handleChange = (item, d) =>{
		let ind = -1;
		basket.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = basket;
		tempArr[ind].quantity += d;
		
		if (tempArr[ind].quantity === 0)
			tempArr[ind].quantity = 1;
            setBasket([...tempArr])
}
    return(
        <>
        <Box 
        sx={{
        mt:2,
        p:3,
        height: '400px',
        overflowY: basket.length>=5 ? 'scroll': 'hidden',
        display: 'flex', 
        flexDirection:'column',
        gap:2,
        }}>
        {basket.map((item,i)=>{
        return(
            <Box key={item.id}
            sx={{
            display: 'flex', 
            height:'70px',
            justifyContent:'space-evenly',
            alignItems:'center',
            background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
            transition:'170ms',
            border:'1px solid #e5eaf299',
            borderRadius:'20px',
            '&:hover':{ 
                boxShadow:colors.primary[1100],
                border:'1px solid #3399ff'
            }}}>
                <Typography  color={colors.primary[200]} variant="p" align='left' >
                    { item.price }
                </Typography>
                <Typography  color={colors.primary[200]} variant="p" align='left'>
                    { item.title }
                </Typography>
                <img src={item.image} alt='' style={{width:'20px',height:'20px',borderRadius:'10px'}}/>
                <Box variant='div' sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>
                    <IconButton  aria-label="add Item"
                        sx={{ background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                        boxShadow:colors.primary[1100],
                        '&:hover':{ 
                            scale:2
                        }}}
                        onClick={()=>{
                            handleChange(item, +1)
                    }}>
                        <AddCircleOutlineOutlinedIcon  sx={{color:colors.primary[300],
                        '&:hover':{ 
                        }
                    }}/>
                    </IconButton>
                    <div 
                    style={{ 
                    width:'25px',
                    height:'25px',
                    borderRadius:5,
                    display: 'flex', 
                    justifyContent:'space-evenly',
                    alignItems:'center'}}>
                        <Typography  color={colors.primary[900]} variant="h4" align='center'>
                            {item.quantity}
                        </Typography>
                    </div>
                    <IconButton  aria-label="minus an Item"
                    sx={{ background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    boxShadow:colors.primary[1100],
                    '&:hover':{ 
                        scale:2
                    }}}
                    onClick={()=>{
                        handleChange(item, -1)
                    }}>
                        <RemoveCircleOutlinedIcon   sx={{color:colors.primary[300]}}/>
                    </IconButton>
                </Box>
                <Typography  color={colors.primary[200]} variant="p" align='left' >
                    { item.price * item.quantity }
                </Typography>
                <IconButton  aria-label="Delete"
                    sx={{ background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                    boxShadow:colors.primary[1100],
                    '&:hover':{ 
                        scale:2
                    }}}
                    onClick={()=>{
                        handleRemove(item.id)
                    }}>
                        <AutoDeleteOutlinedIcon   sx={{color:'#e23f3f'}}/>
                </IconButton>
            </Box>
            )
        })}
        </Box>
        <Box sx={{p:3}}>
            <Typography variant='h3' color={colors.primary[200]} >
                Total : {price}<span style={{color:colors.primary[300]}}> $</span> 
            </Typography>
        </Box>
        </>
    )
}