// import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import photoCheckOut from '../../../images/checkoutAd.jpg'
import { Typography, colors } from '@mui/material';
import { GlobalContext } from "../../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { tokens} from '../../../Context/ThemeContext'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import PhotoAnna from '../../../images/pexels-anna-shvets-4167542.jpg'
import ProductsInCart from './ProductsInCart';
import NoProductsInCart from './NoProductsInCart';

export default function Upper() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context = useContext(GlobalContext)
  const { basket } = context
  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: colors.primary[300],
    // background:colors.primary[200],
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
  
  return (
    <Box sx={{ flexGrow: 1 ,mt:7,p:2
    }}>
      <Grid container spacing={1}>
        <Grid xs={6} md={8}>
          <img src={photoCheckOut} alt=''
          style={{width:'100%',
        }}/>
          <Typography  color={colors.primary[200]} variant="h3" align='left' sx={{mt:2}}>Hello,</Typography>
          <Typography  color={colors.primary[200]} variant="h2" align='left' sx={{mt:2}}>
            Your shopping <span style={{color:colors.primary[300]}}> Basket</span></Typography>
          <Root >
            <Divider textAlign="left"  color={ colors.primary[300] }>Box</Divider>  
          </Root>
          {
          basket.length === 0 ?
          <NoProductsInCart/>
          :
          <ProductsInCart/>
          }
          
        </Grid>
        <Grid xs={6} md={4}// sx={{background:colors.primary[300]}}
        >
        <img src={PhotoAnna} alt=''
            style={{width:'100%',
            height:'100%',
            boxShadow:' rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
          }}/>
        </Grid>
      
      </Grid>
    </Box>
  );
}