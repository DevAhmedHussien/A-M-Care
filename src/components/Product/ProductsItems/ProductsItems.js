import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import Items from '../ProductsItems/Items';
import {productsData} from './ProductsData'
export default function ProductItems({products}){
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
                            products.map((item)=>{
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