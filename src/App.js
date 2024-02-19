import './App.css';
import { useState } from 'react';
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
import{ GlobalContext } from './Context/GlobalContext';
// import VerticalLinearStepper from './components/Stepper';
function App() {
  const [theme, toggleColorMode , mode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [basket,setBasket]= useState([])
  //   price 
    let [price,setPrice]= useState(0)
    const getBasketTotal = ()=>{
      let total=0;
      basket?.map((item)=>{
        return total += item.price
      })
      setPrice(total)
    }   
  // removeelement 
  const removeFromBasket = (item) => {
    console.log(item)
    const index = basket.filter((obj) => obj.price !== item.price);
    setBasket([...basket, index])
  };
  return (
    <ThemeProvider theme={theme}>  
      <GlobalContext.Provider 
      value = {{ 
        basket: basket , 
        setBasket: setBasket ,
        removeFromBasket:removeFromBasket,
        getBasketTotal:getBasketTotal ,
        price:price}}>
        <ColorModeContext.Provider value={{toggleColorMode,theme,mode}}>
      <div className= "App" style={{ backgroundColor: colors.primary[100]}}> 
        <NavBar/>
        {/* <Main/> */}
        {/* <VerticalLinearStepper/> */}
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
    </ThemeProvider>
  );
}
export default App;
