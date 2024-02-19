import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import Items from '../ProductsItems/Items';
import {productsData} from './ProductsData'
export default function ProductItems(){
const theme = useTheme();
const colors = tokens(theme.palette.mode);
console.log('productData',productsData)
return(
    <>
        <Box variant='div'
            sx={{
                height:'100%',
                mt:5
            }}>
                <Typography variant='h3' color={colors.primary[200]}
                sx={{textAlign:'center',
                fontWeight:'700'}}> 
                Which product is right for 
                <span 
                style={{color:'#3399ff'}}> you 
                </span>  
                </Typography>
                <Typography variant='h5'  
                sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
                These treatments requires an assessment of your medical history and labwork by a MinuteMD medical provider.</Typography>
                <Box variant='div'
                    sx={{mt:10,
                    display:'flex',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:10,
                    height:'100%',
                    }}>
                        {
                            productsData.map((item)=>{
                                return(
                                    <Items key={item.id} item={item}/>
                                )
                            })
                        }
                </Box>
        </Box>
    </>
)
}