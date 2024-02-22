
import { useEffect,useState } from 'react';
import MainProduct from './mainProduct/MainProduct'
import ProductItems from './ProductsItems/ProductsItems'
import axios from 'axios'
import Questions from '../Main/questions/Questions';
export default function Product(){
    const [products,setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            // Assuming the API response contains a 'data' property with the array of products
            let products = response.data.products;
            // Handle the products data as needed
            products.forEach((element) => {
                element.quantity = 1
            });
            console.log('productsApi',products);
            setProducts(products)
            } catch (error) {
            // Handle errors
            console.error('Error fetching products:', error);
            }
        };
        useEffect(()=>{

            fetchProducts()
        },[])
    return(
    <>
        <MainProduct/>
        <ProductItems products={products}/>
        <Questions/>
    </>    
    )
}