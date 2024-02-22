
import { useEffect,useState } from 'react';
import MainProduct from './mainProduct/MainProduct'
import ProductItems from './ProductsItems/ProductsItems'
import axios from 'axios'
import Questions from '../Main/questions/Questions';
import LoadingComponent from './LoadingComponent';
export default function Product(){
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