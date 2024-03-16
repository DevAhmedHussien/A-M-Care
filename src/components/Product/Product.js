
import { useEffect,useState } from 'react';
import MainProduct from './mainProduct/MainProduct'
import ProductItems from './ProductsItems/ProductsItems'
import axios from 'axios'
import { Typography } from '@mui/material';
import Questions from '../Main/questions/Questions';
import LoadingComponent from './LoadingComponent';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function Product(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [products,setProducts] = useState([]);
    const[isLoading , setLoading] = useState(false)
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://dummyjson.com/products');
            // Assuming the API response contains a 'data' property with the array of products
            let products = response.data.products;
            //add property qunantity for every obj
            products.forEach((element) => {
                element.quantity = 1
            });
            console.log('productsApi',products);
            setProducts(products)
            } catch (error) {
            // Handle errors
            console.error('Error fetching products:', error);
            }
            finally{
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }
        };
        useEffect(()=>{
            fetchProducts()
        },[])
    return(
    <>
        <MainProduct/>
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
        <div>
            {isLoading ?
            <LoadingComponent />
            :
            <ProductItems products={products}/>
            }
        </div>
        <Questions/>
    </>    
    )
}