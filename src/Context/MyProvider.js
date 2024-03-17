// MyProvider.js
import React, { useState ,useEffect} from 'react';
import GlobalContext from './GlobalContext';
import { useTranslation } from 'react-i18next';
const MyProvider = ({ children }) => {
  const [show , setShow] = useState(false)
  const [price,setPrice] = useState()
  const [basket , setBasket] = useState([])
  // language
  const[language,setLanguage]=useState('en')
  const { t, i18n } = useTranslation();
  // price 
    const getBasketTotal = ()=>{
      let total=0;
      basket?.map((item)=>{
        return total += (item.price * item.quantity)
      })
      setPrice(total)
    }   
  // removeelement 
  const handleRemove = (id) =>{
    const arr = basket.filter((item)=>item.id !== id );//delete element from array
    setBasket(arr);
    getBasketTotal();
}
  // to get price 
    useEffect(()=>{
      getBasketTotal()
    },[basket])
    //alert
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },1000)
    },[])
  return (
    <GlobalContext.Provider 
    value={{basket,setBasket,show,price,setShow,language,t,i18n,setLanguage,handleRemove,getBasketTotal}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MyProvider;