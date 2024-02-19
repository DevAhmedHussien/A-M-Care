
import { useEffect } from 'react';
import MainProduct from './mainProduct/MainProduct'
import ProductItems from './ProductsItems/ProductsItems'
import axios from 'axios'
import Questions from '../Main/questions/Questions';
export default function Product(){
    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios.get('https://dummyjson.com/api/products');
    //         // Assuming the API response contains a 'data' property with the array of products
    //         const products = response.data.data;
    //         // Handle the products data as needed
    //         console.log(products);
    //         } catch (error) {
    //         // Handle errors
    //         console.error('Error fetching products:', error);
    //         }
    //     };
    //     useEffect(()=>{
    //         fetchProducts()
    //     },[])
    return(
    <>
        <MainProduct/>
        <ProductItems/>
        <Questions/>
    </>    
    )
}