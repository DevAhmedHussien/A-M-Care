import './App.css';
import { useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Main from './components/Main/Main';
import Product from './components/Product/Product';
import About from './components/About/About';
import Contact from './components/Contacts/Contacts';
import {ThemeProvider} from '@mui/material';
import {useMode} from './Context/ThemeContext'
import { ColorModeContext,tokens} from './Context/ThemeContext'
import Cart from './components/cart/Cart';
import NotFound from './components/notFound/NotFound';
// import  {StateProvider}  from './Context/GlobalContext';
import{ GlobalContext } from './Context/GlobalContext';
import { useTranslation } from 'react-i18next';
import Alert from './components/Main/Alert';
function App() {
  const [theme, toggleColorMode , mode] = useMode();
  const colors = tokens(theme.palette.mode);
  const[price,setPrice]=useState()
  const [basket,setBasket]= useState([])
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
    const [show , setShow] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },1000)
    },[])
    const close = ()=>{
      setShow(false)
  }
  return (
    <ThemeProvider theme={theme}>  
    {/* <StateProvider>  */}
      <GlobalContext.Provider 
      value = {{ 
        basket: basket , 
        setBasket: setBasket ,
        handleRemove:handleRemove,
        getBasketTotal:getBasketTotal ,
        price:price,
        language,setLanguage
      }}
        >
        <ColorModeContext.Provider value={{toggleColorMode,theme,mode}}>
      <div className= "App"
      style={{
        backgroundColor: colors.primary[100],
        direction: language==='en'? 'ltr':'rtl',
      }}> 
        <Alert show={show} setShow={setShow}/>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Main/> } />
          <Route path="Product" element={ <Product/> } />
          <Route path="About" element={ <About/> } />
          <Route path="Contact" element={ <Contact/> } />
          <Route path="Cart" element={ <Cart/> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>  
          </ColorModeContext.Provider>
        </GlobalContext.Provider>
    {/* </StateProvider> */}
    </ThemeProvider>
  );
}
export default App;
