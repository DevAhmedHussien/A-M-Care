import './App.css';
import { useContext } from 'react';
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
import Form from './components/Form/Form';
import LanguageButtons from './components/navBar/LanguageButtons';
import Footer from './components/Footer/Footer'
import GlobalContext  from './Context/GlobalContext';
import MyProvider from './Context/MyProvider';
import Alert from './components/Main/Alert';
import Princing from './components/pricing/Pricing';
function App() {
  const [theme, toggleColorMode , mode] = useMode();
  const colors = tokens(theme.palette.mode);
  // const { language }  = useContext(GlobalContext)
  return (
    <ThemeProvider theme={theme}>
      <MyProvider>
        <ColorModeContext.Provider value={{toggleColorMode,theme,mode}}>
          <div className= "App"
          style={{
            backgroundColor: colors.primary[100],
            // direction: language==='en'? 'ltr':'rtl',
          }}> 
            <Alert/>
            <NavBar/>
            <LanguageButtons/>
            <Routes>
              <Route path="/" element={ <Main/> } />
              <Route path="Product" element={ <Product/> } />
              <Route path="Pricing" element={ <Princing/> } />
              <Route path="About" element={ <About/> } />
              <Route path="Contact" element={ <Contact/> } />
              <Route path="Cart" element={ <Cart/> } />
              <Route path="Form" element={<Form/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
          </div>  
        </ColorModeContext.Provider>
      </MyProvider>
    </ThemeProvider>
  );
}
export default App;
