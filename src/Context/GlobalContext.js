import { createContext,useState,useEffect } from "react";
export const GlobalContext = createContext();


// export let StateProvider =()=>{
//     const[price,setPrice]=useState()
//     const [basket,setBasket]= useState([])
//     // language
//     const[language,setLanguage]=useState('en')
//     // const { t, i18n } = useTranslation();
//     // price 
//     const getBasketTotal = ()=>{
//         let total=0;
//         basket?.map((item)=>{
//           return total += (item.price * item.quantity)
//         })
//         setPrice(total)
//     }   
//     // removeelement 
//     const handleRemove = (id) =>{
//         const arr = basket.filter((item)=>item.id !== id );//delete element from array
//         setBasket(arr);
//         getBasketTotal();
//         }
//         useEffect(()=>{
//             getBasketTotal()
//         },[basket])
//     return(
//         <GlobalContext.Provider 
//         value={{
//             basket: basket , 
//             setBasket: setBasket ,
//             handleRemove:handleRemove,
//             getBasketTotal:getBasketTotal ,
//             price:price,
//             // language:language,setLanguage:setLanguage
//             }}>
//         </GlobalContext.Provider>
//     )
// }
